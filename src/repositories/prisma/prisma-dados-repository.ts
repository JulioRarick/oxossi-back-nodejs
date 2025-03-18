import { DadosRepository } from "../dados-repository";
import { prisma } from '@/lib/prisma'

export class PrismaDadosRepository implements DadosRepository {
    async fetchAllDados() {
        const dados = await prisma.dados.findMany()
        return dados
    }
}