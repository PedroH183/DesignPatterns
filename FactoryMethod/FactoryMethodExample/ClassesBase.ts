import { DocumentEx } from "./Documents"

export class PDF implements DocumentEx{
    nome : string
    tamanho : string
    tipo = "PDF" as "PDF"

    constructor( name : string, tamanho : string){
        this.nome = name
        this.tamanho = tamanho
    }
}

export class DOC implements DocumentEx {
    nome : string
    tamanho: string
    tipo = "DOC" as "DOC"

    constructor( name : string, tamanho : string){
        this.nome = name
        this.tamanho = tamanho
    }
}