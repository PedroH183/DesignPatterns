import { db_users } from "./db_simulacao_data";
import { AdapterAuthenticationAlgorithm, IAuthentication, user } from "./interfaces";


export class AdapterAthentication implements AdapterAuthenticationAlgorithm{
  /*
    Adapter é responsável por deter a lógica de comunicação 
    com a porta da classe dominio que nesse contexto é o authenticationService
  */

  auth_service : authenticationService
  
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

  constructor(){
    // composition method
    this.auth_service = new authenticationService()
  }

  login(username: string, password: string): {} {
    const valid_password = this.check_type_password(password);
    return this.auth_service.login(username, valid_password);
  }

  private check_type_password( password: string ){
    let pass = password;
    
    const method_password = password.split(":")[0]
    if( method_password  === "ascii" ){
      pass = this.getPasswordInDecimal(password);
    
    }else if( method_password !== "decimal" ){    
      throw new Error("Password Method invalid");
    }
    return pass
  }

  private getPasswordInDecimal( passwordInAsciiComplete : string ): string {
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