import { DadosRepository } from '@/repositories/dados-repository'
import { Dados } from '@prisma/client'
import { randomUUID } from 'crypto'

interface DadosUseCaseResponse extends Dados {
    titulo: string
    ref: string
    datas: string
    AnoI: string
    AnoF: string
    periodoA: string
    nomes: string
    capitania: string
    lugares: string
    temas: string
    tematicas: string
    temaPercent: string
    autores: string
    anoPub: string
    fonte: string
    link: string
}
export class CreateDadosUseCase {
  constructor(private dadosRepository: DadosRepository) {}

  async execute({
    titulo,
    ref,
    datas,
    AnoI,
    AnoF,
    periodoA,
    nomes,
    capitania,
    lugares,
    temas,
    tematicas,
    temaPercent,
    autores,
    anoPub,
    fonte,
    link,
  }: Dados): Promise<DadosUseCaseResponse> {


    const dadoUploaded = await this.dadosRepository.create({
        store_id: randomUUID(), // Replace with actual value
        id_X: randomUUID(), 
        titulo,
        ref,
        datas,
        AnoI,
        AnoF,
        periodoA,
        nomes,
        capitania,
        lugares,
        temas,
        tematicas,
        temaPercent,
        autores,
        anoPub,
        fonte,
        link,
    })

    return {
        ...dadoUploaded,
        titulo: dadoUploaded.titulo ?? '',
        ref: dadoUploaded.ref ?? '',
        datas: dadoUploaded.datas ?? '',
        AnoI: dadoUploaded.AnoI ?? '',
        AnoF: dadoUploaded.AnoF ?? '',
        periodoA: dadoUploaded.periodoA ?? '',
        nomes: dadoUploaded.nomes ?? '',
        capitania: dadoUploaded.capitania ?? '',
        lugares: dadoUploaded.lugares ?? '',
        temas: dadoUploaded.temas ?? '',
        tematicas: dadoUploaded.tematicas ?? '',
        temaPercent: dadoUploaded.temaPercent ?? '',
        autores: dadoUploaded.autores ?? '',
        anoPub: dadoUploaded.anoPub ?? '',
        fonte: dadoUploaded.fonte ?? '',
        link: dadoUploaded.link ?? '',
    }
  }
}
