
export interface User{
  id: string,
  nome: string,
}

export type actions = {
  nome: "",
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