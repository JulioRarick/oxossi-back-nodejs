import { DadosRepository } from "@/repositories/dados-repository"


export class ListAllDadosUseCase {
  constructor(private dadosRepository: DadosRepository) {}

  async execute() {
    const dados = await this.dadosRepository.fetchAllDados()
    return dados
  }
}