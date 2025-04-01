import { DadosRepository } from '@/repositories/dados-repository'
import { DadosUseCaseRequest, DadosUseCaseResponse } from '@/types/create-dados'
import { randomUUID } from 'crypto'


export class CreateDadosUseCase {
  constructor(private dadosRepository: DadosRepository) {}

  async execute({
  data,
  pdfFilename,
  pdfMimeType,
  pdfFileSize,
  }: DadosUseCaseRequest): Promise<DadosUseCaseResponse> {


    const dadoUploaded = await this.dadosRepository.create({
          data: {
            ...data,
            id_X: randomUUID(),
            store_id: randomUUID(),
          },
          pdfFilename,
          pdfMimeType,
          pdfFileSize,

    })

    return {
        ...dadoUploaded,
    }
  }
}
