import { IAuthentication, user } from "./interfaces";

const db_users : user[] = [
  {
    "nome" : "Pedro",
    "senha": "1234",
  },
  {
    "nome" : "Arnold",
    "senha": "4321"
  }
]


class authentication implements IAuthentication{
  /*
    Classe responsável por fazer a autenticação
  */
  
  login(username: string, password: string): {} {
    
    const user = this._findUsernameIfExist(username)

    if( user === false ){
      return {"message" : "usuario não encontrado", "error" : true}
    }

    const password_check_result = this._checkPassword(password)

    if( password_check_result === false ){
      return {"message" : "credenciais incorretas", "error" : true}
    }

    return {"message" : "usuario logado", "error" : false}
  }

  private _findUsernameIfExist( username : string ): boolean  {
    
    const user_exist = db_users.filter( 
      (usuario : user) => { return( usuario["nome"] === username ) }
    )
    
    return user_exist.length > 0
  }

  private _checkPassword(password: string): boolean {



    throw new Error("Method not implemented.");
  }
}