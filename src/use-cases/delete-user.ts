// filepath: src/use-cases/delete-user.ts
import { UsersRepository } from '@/repositories/users-repository'

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(userId: string): Promise<void> {
    await this.usersRepository.deleteUser(userId)
  }
}
