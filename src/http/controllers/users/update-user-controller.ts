// filepath: src/http/controllers/users/update-user-controller.ts
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeUpdateUserUseCase } from '@/use-cases/factories/make-update-user-use-case'

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  const updateUserParamsSchema = z.object({
    userId: z.string().uuid(),
  })

  const updateUserBodySchema = z.object({
    role: z.enum(['ADMIN', 'USER_MEMBER']),
  })

  const { userId } = updateUserParamsSchema.parse(request.params)
  const userData = updateUserBodySchema.parse(request.body)

  try {
    const updateUserUseCase = makeUpdateUserUseCase()
    await updateUserUseCase.execute({ userId, ...userData })

    return reply.status(200).send()
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(400).send({ message: error.message })
    }
    return reply.status(400).send({ message: 'Unknown error' })
  }
}
