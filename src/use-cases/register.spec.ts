import { compare } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

import { UserAlreadyExistsError } from './error/user-already-exists-error'
import { RegisterUseCase } from './register'

let registerUseCase: RegisterUseCase
let usersRepository: InMemoryUsersRepository

describe('Register (use-case)', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    registerUseCase = new RegisterUseCase(usersRepository)
  })

  it('should be able to register user', async () => {
    const { user } = await registerUseCase.execute({
      email: 'juliorarick@example.com',
      name: 'Julio Rarick',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should be able to hash user password upon registration', async () => {
    const { user } = await registerUseCase.execute({
      email: 'juliorarick@example.com',
      name: 'Julio Rarick',
      password: '123456',
    })

    const isPasswordHashed = await compare('123456', user.password_hash)

    expect(isPasswordHashed).toBe(true)
  })

  it('should not be able to register user with same email twice', async () => {
    const email = 'juliorarick@example.com'

    await registerUseCase.execute({
      email,
      name: 'Julio Rarick',
      password: '123456',
    })

    await expect(() =>
      registerUseCase.execute({
        email,
        name: 'Julio Rarick',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
