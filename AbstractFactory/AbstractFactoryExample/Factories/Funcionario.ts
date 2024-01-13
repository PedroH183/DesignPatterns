import { FactoryUser, actions } from "./interfaces";

export class Funcionario{
  // classe que representa o client, a integração de todas as outras classes.
  factory : FactoryUser

  constructor( factory : FactoryUser ){
    this.factory = factory
  }

  createUser( nome: string ){
    return this.factory.createUser( nome )
  }

  createRules( actions : actions[] ){
    return this.factory.createRegras( actions )
  }
} 