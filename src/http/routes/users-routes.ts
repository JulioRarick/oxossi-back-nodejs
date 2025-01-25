import { authenticate } from '@controllers/users/authenticate-controller'
import { profile } from '@controllers/users/profile-controller'
import { refresh } from '@controllers/users/refresh-controller'
import { register } from '@controllers/users/register-controller'
import { FastifyInstance } from 'fastify'

import { verifyJWT } from '../hooks/verify-jwt'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.patch('/token/refresh', refresh)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
