import { Dados } from "@prisma/client"

export interface DadosRepository {
    fetchAllDados(): Promise<Dados[]>
    create(data: Dados): Promise<Dados>
}