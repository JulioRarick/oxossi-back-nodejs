import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { UserAlreadyExistsError } from '@/use-cases/error/user-already-exists-error'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'
import { makeCreateDadosUseCase } from '@/use-cases/factories/make-create-dados-use-case'
import { randomUUID } from 'crypto'

export async function createDados(request: FastifyRequest, reply: FastifyReply) {
  const createDadosBodySchema = z.object({
    titulo: z.string(),
    ref: z.string(),
    datas: z.string(),
    AnoI: z.string(),
    AnoF: z.string(),
    periodoA: z.string(),
    nomes: z.string(),
    capitania: z.string(),
    lugares: z.string(),
    temas: z.string(),
    tematicas: z.string(),
    temaPercent: z.string(),
    autores: z.string(),
    anoPub: z.string(),
    fonte: z.string(),
    link: z.string(),
  })

  const { 
    titulo,
    ref,
    datas,
    AnoI,
    AnoF,
    periodoA,
    nomes,
    capitania,
    lugares,
    temas,
    tematicas,
    temaPercent,
    autores,
    anoPub,
    fonte,
    link,
   } = createDadosBodySchema.parse(request.body)

  try {
    const createDadosUseCase = makeCreateDadosUseCase()

    await createDadosUseCase.execute({
        store_id: randomUUID(),
        id_X:  randomUUID(),
        titulo,
        ref,
        datas,
        AnoI,
        AnoF,
        periodoA,
        nomes,
        capitania,
        lugares,
        temas,
        tematicas,
        temaPercent,
        autores,
        anoPub,
        fonte,
        link
    })
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(409).send({ message: error.message })
    }
    throw error
  }

  return reply.status(201).send()
}
