import { FactoryUser, PropostasFinanceira, Regra, User, actions } from "./interfaces";

class Financeira implements User{
  id: number;
  nome: string;

  getPropostasFinanceiras(): PropostasFinanceira[]{
    return [{id : 1, price_submited: 999}]
  }

  constructor( id: number, nome: string ){
    this.id = id;
    this.nome = nome;
  }
}

export class FinanceiraRules implements Regra{
  id: number;
  acoes: actions[];

  constructor( id: number, actions_vetor : actions[] ){
    this.id = id
    this.acoes = actions_vetor
  }
}

export class FinanceiraFactory implements FactoryUser{
  // Classe que representa as variações de implementação relacionadas
  // com uma financeira.

  createRegras( regras_dict : actions[] ) {
    return new FinanceiraRules( 1, regras_dict )
  }

  createUser( nome : string ){
    return new Financeira( 1, nome ) 
  }
}