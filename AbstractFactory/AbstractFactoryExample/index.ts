import { actions } from './Factories/interfaces';
import {VendedorFactory } from './Factories/FactoryVendedor';
import {FinanceiraFactory } from './Factories/FactoryFinanceira';

const main = () => {
 
  const regras_vendedor : actions[] = [
    {nome: "vender", isAllow : true},
    {nome: "financiar", isAllow: false},
  ]

  const regras_financeira : actions[] = [
    {nome: "vender", isAllow : false},
    {nome: "financiar", isAllow: true},
  ]

  const vendedor_factory = new VendedorFactory()
  const financeira_factory = new FinanceiraFactory()
  
  const vendedor_user = vendedor_factory.createUser("Pedro Vendas")
  const financeira_user = financeira_factory.createUser("Paulo Financas")

  console.log( vendedor_user.nome );
  console.log( financeira_user.nome );

  const regra_vendedor = vendedor_factory.createRegras(regras_vendedor)
  const regra_financiador = vendedor_factory.createRegras(regras_financeira)

  console.log("vendedor>>", regra_vendedor.acoes);
  console.log("financeira>>", regra_financiador.acoes);
  
  return 0;
}

main();