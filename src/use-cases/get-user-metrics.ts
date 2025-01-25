import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsUseCaseRequest {
  userId: string
}
interface GetUserMetricsUseCaseResponse {
  countCheckIns: number
}

export class GetUserMetricsUseCase {
  constructor(private checkInRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsUseCaseRequest): Promise<GetUserMetricsUseCaseResponse> {
    const countCheckIns =
      await this.checkInRepository.countCheckInsByUserId(userId)
    return {
      countCheckIns,
    }
  }
}
