// filepath: src/use-cases/factories/make-update-user-use-case.ts
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

import { UpdateUserUseCase } from '../update-user'

export function makeUpdateUserUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const updateUserUseCase = new UpdateUserUseCase(usersRepository)
  return updateUserUseCase
}
