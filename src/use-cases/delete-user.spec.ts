import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

import { DeleteUserUseCase } from './delete-user'
import { ResourceNotExistsError } from './error/resource-not-exists-error'

let deleteUserUseCase: DeleteUserUseCase
let usersRepository: InMemoryUsersRepository

describe('Delete User (use-case)', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    deleteUserUseCase = new DeleteUserUseCase(usersRepository)
  })

  it('should be able to delete a user', async () => {
    const user = await usersRepository.create({
      email: 'juliorarick@example.com',
      name: 'Julio Rarick',
      password_hash: '123456',
    })

    await deleteUserUseCase.execute(user.id)

    const foundUser = await usersRepository.findById(user.id)

    expect(foundUser).toBeNull()
  })

  it('should throw an error if user does not exist', async () => {
    await expect(() =>
      deleteUserUseCase.execute('non-existent-user-id'),
    ).rejects.toBeInstanceOf(ResourceNotExistsError)
  })
})
