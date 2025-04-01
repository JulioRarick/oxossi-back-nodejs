import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'

describe('Get All Data from db Controller (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get all users', async () => {
    await request(app.server).post('/users').send({
      name: 'Julio Rarick',
      email: 'juliorarick@test.com',
      password: '123456',
      role: 'ADMIN',
    })

    const userAuthenticated = await request(app.server).post('/sessions').send({
      email: 'juliorarick@test.com',
      password: '123456',
    })

    const { token } = userAuthenticated.body

    const response = await request(app.server)
      .get('/database/dados')
      .set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual(expect.any(Array))
  })
})
