import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

import { GetAllUsersUseCase } from './get-all-users'

let getAllUsersUseCase: GetAllUsersUseCase
let usersRepository: InMemoryUsersRepository

describe('Get All Users (use-case)', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    getAllUsersUseCase = new GetAllUsersUseCase(usersRepository)
  })

  it('should be able to get all users', async () => {
    await usersRepository.create({
      email: 'juliorarick@example.com',
      name: 'Julio Rarick',
      password_hash: '123456',
    })

    await usersRepository.create({
      email: 'john.doe@example.com',
      name: 'John Doe',
      password_hash: 'abcdef',
    })

    const users = await getAllUsersUseCase.execute()

    expect(users).toHaveLength(2)
    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ email: 'juliorarick@example.com' }),
        expect.objectContaining({ email: 'john.doe@example.com' }),
      ]),
    )
  })
})
