import { FactoryUser, PropostasFinanceira, Regra, User, actions } from "./interfaces";

class Financeira implements User{
  id: string;
  nome: string;

  getPropostasFinanceiras(): PropostasFinanceira[]{
    return [{id : 1, price_submited: 999}]
  }

  constructor( nome ){
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
    return new Financeira( nome ) 
  }
}