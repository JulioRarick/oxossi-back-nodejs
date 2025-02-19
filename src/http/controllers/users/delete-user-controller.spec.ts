import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { app } from '@/app'

describe('Delete User Controller (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to delete a user', async () => {
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

    const userCreated = await request(app.server).post('/users').send({
      name: 'User to Delete',
      email: 'userdelete@test.com',
      password: '123456',
      role: 'USER_MEMBER',
    })

    const { id } = userCreated.body

    const response = await request(app.server)
      .delete(`/delete/${id}`)
      .set('Authorization', `Bearer ${token}`)

    expect(response.statusCode).toEqual(204)
  })
})
