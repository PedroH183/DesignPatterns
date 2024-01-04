import { DOC, PDF } from "./ClassesBase"

export interface DocumentEx{
    nome : string,
    tamanho : string,
    tipo : "PDF" | "DOC",
}

abstract class DocumentsCreator{
    abstract getDocument( documentType : "PDF" | "DOC"  ) : PDF | DOC
}

export class DocumentConcrete implements DocumentsCreator{

    getDocument( documentType : "PDF" | "DOC" ) : PDF | DOC {
        switch(documentType){
            case "PDF":
                return new PDF( "fileExist", "25mb")
            case "DOC":
                return new DOC( "notExistFile", "0mb")
        }
    }
}