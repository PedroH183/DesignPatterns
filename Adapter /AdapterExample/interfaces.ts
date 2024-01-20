export type asciiToDecimal = {
  "48": number;
  "49": number;
  "50": number;
  "51": number;
  "52": number;
  "53": number;
  "54": number;
  "55": number;
  "56": number;
  "57": number;
}

export interface user{
  nome : string,
  senha : string,
}

export interface IAuthentication{
  login( username : string, password : string ) : {}
}

export interface AdapterAuthenticationAlgorithm extends IAuthentication{
}