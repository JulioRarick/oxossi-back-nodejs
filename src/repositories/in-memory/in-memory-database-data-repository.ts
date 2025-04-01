import { Dados } from '@prisma/client'
import { DadosRepository } from '../dados-repository'


export class InMemoryDatabaseDataRepository implements DadosRepository {
  public items: Dados[] = []

  async fetchAllDados() {
    return this.items
  }

  async create(data: Dados) {
    this.items.push(data)
    return data
  }
}
