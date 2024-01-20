import { api_user_credentials } from "./api_simulacao_data";
import { AdapterAthentication, authenticationService } from "./classes";

/*
  Problema:
  Meu sistema recebe as senha em ascii da api ( simulada por api_user_credentials)
  e preciso adapatar essa senha de modo que eu não altere o funcionamento da classe 
  de autenticação, pois possuo dados já cadastrados que seriam perdidos.

  Solução:
  Criei um adapater para transformar os dados vindos da api em decimais ( que deveria 
    ser o padrão ) e utilizo minha classe original de autenticação.
*/


const main = () => {
  const adapter = new AdapterAthentication()

  let result = adapter.login( api_user_credentials[0]["nome"], api_user_credentials[0]["senha"] )
  console.log(result);

  result = adapter.login( api_user_credentials[1]["nome"], api_user_credentials[1]["senha"] )
  console.log(result);
  
  return 0;
}

main()