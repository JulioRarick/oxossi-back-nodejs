import { UsersRepository } from '@/repositories/users-repository'

interface UpdateUserRequest {
  userId: string
  role: 'ADMIN' | 'USER_MEMBER'
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ userId, role }: UpdateUserRequest): Promise<void> {
    await this.usersRepository.updateUser(userId, { role })
  }
}
