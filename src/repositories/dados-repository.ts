import { Dados } from "@prisma/client"

export interface DadosRepository {
    fetchAllDados(): Promise<Dados[]>
}