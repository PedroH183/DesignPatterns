import { user } from "./interfaces";
import { AdapterAthentication, authenticationService } from "./classes";


const api_user_credentials : user[] = [
  {
    // valid user
    "nome" : "Pedro",
    "senha" : "ascii:49 50 51 52" // 1234
  },
  {
    // invalid crendential
    "nome" : "Arnold",
    "senha" : "ascii:49 50 51 53" // 1235
  },
  
]

const main = () => {
  // this function works like my controller in a restfulApi
  
  const authetication = new authenticationService()
  const adapter = new AdapterAthentication()

  // as senhas recebidas estão em ascii e sendo convertidas para decimal
  let passwordDecimal = adapter.getPasswordInDecimal(api_user_credentials[0]["senha"])
  let result = authetication.login( api_user_credentials[0]["nome"], passwordDecimal )
  console.log(result);

  passwordDecimal = adapter.getPasswordInDecimal(api_user_credentials[1]["senha"])
  result = authetication.login( api_user_credentials[1]["nome"], passwordDecimal )
  console.log(result);
  
  return 0;
}

main()