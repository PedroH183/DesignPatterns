import {User, Regra, actions, FactoryUser} from "./interfaces"

class Vendedor implements User{
  id: number;
  nome: string;

  constructor( id: number, nome: string ){
    this.id = id;
    this.nome = nome;
  }

  getComisaoObtida() : number{
    return 999
  }

  getVendasRealizadas(): "Muitas"{
    return "Muitas"
  }
}

class VendedorRules implements Regra{
  id: number;
  acoes: actions[];

  constructor( id: number, actions_vetor : actions[] ){
    this.id = id
    this.acoes = actions_vetor
  }
}

export class VendedorFactory implements FactoryUser{
  //  Classe que representa as variações de coleçoes de dados de 
  //  um vendedor.

  createRegras( regras_dict : actions[] ) {
    return new VendedorRules( 1, regras_dict )
  }

  createUser( nome : string ){
    return new Vendedor( 1, nome ) 
  }
}