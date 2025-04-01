import { PrismaDadosRepository } from "@/repositories/prisma/prisma-dados-repository"
import { CreateDadosUseCase } from "../create-dados"


export function makeCreateDadosUseCase() {
  const dadosRepository = new PrismaDadosRepository()
  const createDadosUseCase = new CreateDadosUseCase(dadosRepository)

  return createDadosUseCase
}