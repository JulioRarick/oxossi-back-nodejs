import { User } from '@prisma/client'
import bcrypt from 'bcryptjs'

import { UsersRepository } from '@/repositories/users-repository'

import { UserAlreadyExistsError } from './error/user-already-exists-error'

interface RegisterUseCaseParams {
  email: string
  name: string
  password: string
}

interface RegisterUseCaseResponse {
  user: User
}
export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    name,
    password,
  }: RegisterUseCaseParams): Promise<RegisterUseCaseResponse> {
    const password_hash = await bcrypt.hash(password, 6)

    const emailAlreadyExists = await this.usersRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      email,
      name,
      password_hash,
    })

    return {
      user,
    }
  }
}
