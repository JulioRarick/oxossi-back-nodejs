import { authenticate } from '@controllers/users/authenticate-controller'
import { deleteUser } from '@controllers/users/delete-user-controller'
import { profile } from '@controllers/users/profile-controller'
import { refresh } from '@controllers/users/refresh-controller'
import { register } from '@controllers/users/register-controller'
import { FastifyInstance } from 'fastify'

import { getAllUsers } from '../controllers/users/get-all-users-controller'
import { updateUser } from '../controllers/users/update-user-controller'
import { verifyJWT } from '../hooks/verify-jwt'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.patch('/token/refresh', refresh)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
  app.get('/all-users', { onRequest: [verifyJWT] }, getAllUsers)
  app.delete('/delete/:userId', { onRequest: [verifyJWT] }, deleteUser)
  app.patch('/update/:userId', { onRequest: [verifyJWT] }, updateUser)
}
