import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
  fetchAllUsers(): Promise<User[]>
  deleteUser(userId: string): Promise<void>
  updateUser(userId: string, data: Prisma.UserUpdateInput): Promise<void>
}
