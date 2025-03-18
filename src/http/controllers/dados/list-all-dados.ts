import { makeListAllDadosUseCase } from '@/use-cases/factories/make-list-all-dados-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'


export async function listAllDados(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const ListAllDadosUseCase = makeListAllDadosUseCase()

  const dados = await ListAllDadosUseCase.execute()

  return reply.status(200).send(dados)
}
