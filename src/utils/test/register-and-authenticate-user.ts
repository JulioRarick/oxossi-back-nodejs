import { hash } from 'bcryptjs'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

import { prisma } from '@/lib/prisma'

export async function registerAndAuthenticateUser(
  app: FastifyInstance,
  isAdmin = false,
) {
  await prisma.user.create({
    data: {
      name: 'Julio Rarick',
      email: 'juliorarick@test.example',
      password_hash: await hash('123456', 6),
      role: isAdmin ? 'ADMIN' : 'USER_MEMBER',
    },
  })
  const userAuthenticatedResponse = await request(app.server)
    .post('/sessions')
    .send({
      email: 'juliorarick@test.example',
      password: '123456',
    })

  const { token } = userAuthenticatedResponse.body

  return {
    token,
  }
}
