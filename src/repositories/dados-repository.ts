import { DadosUseCaseRequest, DadosUseCaseResponse } from "@/types/create-dados"
import { Dados } from "@prisma/client"

export interface DadosRepository {
    fetchAllDados(): Promise<Dados[]>
    create(data: DadosUseCaseRequest): Promise<DadosUseCaseResponse>
}