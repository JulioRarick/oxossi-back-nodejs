import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'

describe('Profile Controller (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get user profile data', async () => {
    await request(app.server).post('/users').send({
      name: 'Julio Rarick',
      email: 'juliorarick@test.example',
      password: '123456',
    })
    const userAuthenticatedResponse = await request(app.server)
      .post('/sessions')
      .send({
        email: 'juliorarick@test.example',
        password: '123456',
      })

    const { token } = userAuthenticatedResponse.body

    const getProfileResponse = await request(app.server)
      .get('/me')
      .set('Authorization', `Bearer ${token}`)
      .send()
    expect(getProfileResponse.statusCode).toEqual(200)
    expect(getProfileResponse.body.user).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: 'Julio Rarick',
        email: 'juliorarick@test.example',
      }),
    )
  })
})
