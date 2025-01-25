import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'

describe('Refresh Controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to refresh user token', async () => {
    await request(app.server).post('/users').send({
      name: 'Julio Rarick',
      email: 'juliorarick@test.example',
      password: '123456',
    })
    const authenticatedResponse = await request(app.server)
      .post('/sessions')
      .send({
        email: 'juliorarick@test.example',
        password: '123456',
      })

    const cookies = authenticatedResponse.get('Set-Cookie')

    if (!cookies) {
      throw new Error('No cookies found in the response')
    }

    const response = await request(app.server)
      .patch('/token/refresh')
      .set('Cookie', cookies)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
    expect(response.get('Set-Cookie')).toEqual([
      expect.stringContaining('refresh-token='),
    ])
  })
})
