
export interface User{
  id: number,
  nome: string,
}

export type actions = {
  nome: string,
  isAllow: boolean,
}

export interface Regra{
  id: number,
  acoes: actions[],
}

export interface PropostasFinanceira{
  id: number,
  price_submited: number,
}

export interface FactoryUser{
  createRegras( regras_dict: actions[] );
  createUser( nome: string );
}