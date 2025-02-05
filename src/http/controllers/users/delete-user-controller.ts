import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeDeleteUserUseCase } from '@/use-cases/factories/make-delete-user-use-case'

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const deleteUserParamsSchema = z.object({
    userId: z.string().uuid(),
  })

  const { userId } = deleteUserParamsSchema.parse(request.params)

  try {
    const deleteUserUseCase = makeDeleteUserUseCase()
    await deleteUserUseCase.execute(userId)

    return reply.status(204).send()
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(400).send({ message: error.message })
    }
    return reply.status(400).send({ message: 'An unknown error occurred' })
  }
}
