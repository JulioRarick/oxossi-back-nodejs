import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'

import { GetUserMetricsUseCase } from './get-user-metrics'

let checkInsRepository: InMemoryCheckInsRepository
let getUserMetricsUseCase: GetUserMetricsUseCase

describe('Get User Metrics (use-case)', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    getUserMetricsUseCase = new GetUserMetricsUseCase(checkInsRepository)
  })
  it('should return the user metrics (count check-ins)', async () => {
    await checkInsRepository.create({
      user_id: 'fake-user-id-01',
      gym_id: 'fake-gym-id-01',
    })
    await checkInsRepository.create({
      user_id: 'fake-user-id-01',
      gym_id: 'fake-gym-id-02',
    })

    const { countCheckIns } = await getUserMetricsUseCase.execute({
      userId: 'fake-user-id-01',
    })

    expect(countCheckIns).toBe(2)
  })
})
