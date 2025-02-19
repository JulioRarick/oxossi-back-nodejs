import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

import { ResourceNotExistsError } from './error/resource-not-exists-error'
import { UpdateUserUseCase } from './update-user'

interface UserRequest {
  userId: string
  role: 'ADMIN' | 'USER_MEMBER'
}

let usersRepository: InMemoryUsersRepository
let updateUserUseCase: UpdateUserUseCase

describe('Get User Profile (use-case)', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    updateUserUseCase = new UpdateUserUseCase(usersRepository)
  })

  it('should be able to update user profile', async () => {
    const createdUser = await usersRepository.create({
      name: 'Julio Rarick',
      email: 'juliorarick@example.com',
      password_hash: await hash('123456', 6),
      role: 'ADMIN',
    })

    const user: UserRequest = await updateUserUseCase.execute({})

    expect(user.role).toEqual(expect.stringContaining('USER_MEMBER'))
  })

  it('should not be able to update user profile with wrong id', async () => {
    await expect(() =>
      updateUserUseCase.execute({
        userId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotExistsError)
  })
})
