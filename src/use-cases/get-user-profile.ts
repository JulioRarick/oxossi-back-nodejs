import { User } from '@prisma/client'

import { UsersRepository } from '@/repositories/users-repository'

import { ResourceNotExistsError } from './error/resource-not-exists-error'

interface GetUserProfileUseCaseRequest {
  userId: string
}
interface GetUserProfileUseCaseResponse {
  user: User
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotExistsError()
    }

    return {
      user,
    }
  }
}
