import { user } from "./interfaces";

export const db_users : user[] = [
  // password pattern > method:password 
  // consideração a senha é composta apenas de numeros
  {
    "nome" : "Pedro",
    "senha": "decimal:1234",
  },
  {
    "nome" : "Arnold",
    "senha": "decimal:1234",
  }
]