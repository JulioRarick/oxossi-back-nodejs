import { beforeEach, describe, expect, it } from 'vitest'


import { InMemoryDatabaseDataRepository } from '@/repositories/in-memory/in-memory-database-data-repository'
import { ListAllDadosUseCase } from './list-all-dados'

let databaseDataRepository: InMemoryDatabaseDataRepository
let listAllDatabaseData: ListAllDadosUseCase

describe('List all database data(use-case)', () => {
  beforeEach(() => {
    databaseDataRepository = new InMemoryDatabaseDataRepository()
    listAllDatabaseData = new ListAllDadosUseCase(databaseDataRepository)
  })

  it('should be able to list all database data', async () => {

    const users = await listAllDatabaseData.execute()

    expect(users).toHaveLength(2)
    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: '1',
          name: 'John Doe',
          email: '' 
        }),
      ]),
    )
  })
})
