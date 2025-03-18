import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import { userRoutes } from '@routes/users-routes'
import fastify from 'fastify'
import { ZodError } from 'zod'

import { env } from './env'
import { dadosRoutes } from './http/routes/dados-routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refresh-token',
    signed: false,
  },
  sign: {
    expiresIn: '5d',
  },
})

app.register(fastifyCookie)

app.register(fastifyCors, {
  origin: true,
})

app.register(userRoutes)
app.register(dadosRoutes)

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.errors })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
