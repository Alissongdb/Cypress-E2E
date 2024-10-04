import commum_page from "../../support/pages/commum_page"
import shop_page from "../../support/pages/shop_page"

import {faker} from '@faker-js/faker'

describe('Login com sucesso', () => {
  
  beforeEach('Realizar o login com sucesso', () => {

    commum_page.acessarContaUsuario()
    
  })

  it('Realizar uma compra com sucesso', () => {
  
    shop_page.clicarNoShop()
    shop_page.clicarNoProduto()
    shop_page.clicandoNoProdutoEscolhido()
    shop_page.adicionarNoCarrinho()
    shop_page.clicarNoCarrinho()
    shop_page.clicarEmCheckout()
    shop_page.InsereFirstNameFat(faker.person.firstName())
    shop_page.InsereLastNameFat(faker.person.lastName())
    shop_page.InsereCompanyNameFat(faker.person.jobDescriptor())
    shop_page.InsereEmailFat(faker.internet.email())
    shop_page.InsereCountryFat()
    shop_page.InsereCityFat()
    shop_page.InsereZipcodeFat(faker.location.zipCode())
    shop_page.InsereAddressFat(faker.location.streetAddress())
    shop_page.InsereMessagesFat(faker.person.jobDescriptor())
    shop_page.clicarBotaoSalvarFat()
    shop_page.choosePayment()
    shop_page.clicarBotaoPlaceOrderFat()
    shop_page.ValidaMensagemPedidoSucesso()

  })
    
  })