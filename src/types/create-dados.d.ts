export interface DadosUseCaseRequest {
  data: Dados
  pdfFilename?: string
  pdfMimeType?: string
  pdfFileSize?: number
}
export interface DadosUseCaseResponse  {
    store_id: string
    id_X: string
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
    pdfFilename?: string
    pdfMimeType?: string
    pdfFileSize?: number
}