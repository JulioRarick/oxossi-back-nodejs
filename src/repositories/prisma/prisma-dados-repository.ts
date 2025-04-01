import { Dados } from "@prisma/client";
import { DadosRepository } from "../dados-repository";
import { prisma } from '@/lib/prisma'

export class PrismaDadosRepository implements DadosRepository {
    async fetchAllDados() {
        const dados = await prisma.dados.findMany()
        return dados
    }

    async create(data: Dados) {
        const dados = await prisma.dados.create({
            data: {
                store_id: data.store_id,
                id_X: data.id_X,
                titulo: data.titulo,
                ref: data.ref,
                datas: data.datas,
                AnoI: data.AnoI,
                AnoF: data.AnoF,
                periodoA: data.periodoA,
                nomes: data.nomes,
                capitania: data.capitania,
                lugares: data.lugares,
                temas: data.temas,
                tematicas: data.tematicas,
                temaPercent: data.temaPercent,
                autores: data.autores,
                anoPub: data.anoPub,
                fonte: data.fonte,
                link: data.link
            }
        })
        return dados
    }
}