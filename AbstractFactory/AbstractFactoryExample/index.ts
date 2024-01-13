import { actions } from './Factories/interfaces';
import { Funcionario } from './Factories/Funcionario';
import {VendedorFactory } from './Factories/FactoryVendedor';

const main = () => {
 
  const regras_vendedor : actions[] = [
    {nome: "vender", isAllow : true},
    {nome: "financiar", isAllow: false},
  ]

  const regras_financeira : actions[] = [
    {nome: "vender", isAllow : false},
    {nome: "financiar", isAllow: true},
  ]

  // create only one two factories to represents all variations of vendedor and finaceira
  const factory_vendedor = new Funcionario( new VendedorFactory() ) // abstract method
  const factory_financeira = new Funcionario( new VendedorFactory() ) // abstract method

  const first_vendedor_user = factory_vendedor.createUser("Pedro Vendas")
  const second_vendedor_user = factory_vendedor.createUser("Lucas Vendas")
  
  const first_financeira_user = factory_financeira.createUser("Daniel Financas")
  const second_financeira_user = factory_financeira.createUser("Leandro Financas")

  console.log( first_vendedor_user.nome );
  console.log( second_vendedor_user.nome );
  console.log( first_financeira_user.nome );
  console.log( second_financeira_user.nome );

  const regra_vendedor = factory_vendedor.createRules(regras_vendedor)
  const regra_financiador = factory_financeira.createRules(regras_financeira)

  console.log("vendedor>>", regra_vendedor.acoes);
  console.log("financeira>>", regra_financiador.acoes);
  
  return 0;
}

main();