
import { PrismaDadosRepository } from '@/repositories/prisma/prisma-dados-repository'
import { ListAllDadosUseCase } from '../list-all-dados'

export function makeListAllDadosUseCase() {
  const dadosRepository = new PrismaDadosRepository()
  const listAllDados = new ListAllDadosUseCase(dadosRepository)
  return listAllDados
}