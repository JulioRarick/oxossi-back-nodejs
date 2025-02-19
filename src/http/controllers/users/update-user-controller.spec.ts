import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'

describe('Update User Controller', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to update user profile', async () => {
    await request(app.server).post('/users').send({
      name: 'Julio Rarick',
      email: 'juliorarick@test.com',
      password: '123456',
      role: 'ADMIN',
    })

    const userUpdated = await request(app.server).post('/users').send({
      name: 'Julio Rarick',
      email: 'juliorarick@test-2.com',
      password: '123456',
      role: 'USER_MEMBER',
    })

    const userAuthenticated = await request(app.server).post('/sessions').send({
      email: 'juliorarick@test.com',
      password: '123456',
    })

    const { token } = userAuthenticated.body

    const { id } = userUpdated.body

    const response = await request(app.server)
      .patch(`/update/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        role: 'ADMIN',
      })

    expect(response.statusCode).toEqual(204)
  })
})
