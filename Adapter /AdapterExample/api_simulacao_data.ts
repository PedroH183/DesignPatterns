import { user } from "./interfaces";

export const api_user_credentials : user[] = [
  {
    // valid user
    "nome" : "Pedro",
    "senha" : "ascii:49 50 51 52" // 1234
  },
  {
    // invalid crendential
    "nome" : "Arnold",
    "senha" : "ascii:49 50 51 53" // 1235
  }
]