import { DocumentConcrete } from './Documents.ts'

function main() {
    const instance_constructor = new DocumentConcrete()

    const PDF = instance_constructor.getDocument("PDF")
    const DOC = instance_constructor.getDocument("DOC")

    if(PDF.tipo !== DOC.tipo){
        console.log("Instancias diferentes");
    }
}

main();