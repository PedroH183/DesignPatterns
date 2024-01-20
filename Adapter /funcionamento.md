## Detalhamento

O Adapter também conhecido como Wrapper funciona permitindo a comunicação entre
duas interfaces que podem ser incompatíveis. Esses pattern trabalha entre ambas 
interfaces, geralmente um client ( interface que solicitou ) e service ( servico
que ela pretende acessar ).

## Exemplo
- Uma classe mensagem deve receber um objeto do tipo blob compatível com os mimetypes
  definidos, a versão web consegue se comunicar facilmente, mas a versão mobile 
  requer um lógica mais detalhada para o salvamento dessa imagem.

- Em uma aplicação transforma a criptografia entre dois sistemas de autenticação
  compatíveis.

## Diagrama

![Alt text](image.png)

`Note : essa é uma implementação que utiliza a composição`

## Running
  - usign npm (node package manager) `npm index.ts`