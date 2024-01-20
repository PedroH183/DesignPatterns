import { AdapterAuthenticationAlgorithm, IAuthentication, asciiToDecimal, user } from "./interfaces";


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

export class AdapterAthentication implements AdapterAuthenticationAlgorithm{
  /*
    Transforma a senha de ascii para decimal, é valido ressaltar que a senha 
    é composta apenas de dígitos.
  */
  mapper_numbers_in_ascii : {[key : string ] : number} = {
    "48" : 0,
    "49" : 1,
    "50" : 2,
    "51" : 3,
    "52" : 4,
    "53" : 5,
    "54" : 6,
    "55" : 7,
    "56" : 8,
    "57" : 9,
  }

  getPasswordInDecimal( passwordInAsciiComplete : string ): string {
    let passwordInDecimal : string[] = []
    let passwordInAscii = passwordInAsciiComplete.split(":")[1].split(" ")

    for( let i = 0; i < passwordInAscii.length; ++i ){
      passwordInDecimal.push( 
        this.mapper_numbers_in_ascii[ passwordInAscii[i] ].toString()
      );
    }  
    return "decimal:" +  passwordInDecimal.join("");
  }
}


export class authenticationService implements IAuthentication{
  /*
    Classe responsável por fazer a autenticação
    
    O client não pode se comunicar diretamente com esta classe pois há 
    diferentes tipos de criptografia no sistema, sendo necessário passar por
    uma adaptação.

    Esse serviço só funciona com password em decimal !
  */
  
  login(username: string, password: string): {} {
    
    const user = this._findUsernameIfExist(username)

    if( user === false ){
      return {"message" : "usuario não encontrado", "error" : true}
    }

    const password_check_result = this._checkPassword( user as user, password)

    if( password_check_result === false ){
      return {"message" : "credenciais incorretas", "error" : true}
    }

    return {"message" : "usuario logado", "error" : false}
  }

  private _findUsernameIfExist( username : string ): boolean | {}  {
    
    const user_exist = db_users.filter( 
      (usuario : user) => { return( usuario["nome"] === username ) }
    )
    return user_exist.length > 0 ? user_exist[0] : false
  }

  private _checkPassword( user : user, password: string ): boolean {

    // restrict to allow only decimal methods
    if( password.split(":")[1] === "ascii" ){
      return false
    }
    return user["senha"] === password
  }
}