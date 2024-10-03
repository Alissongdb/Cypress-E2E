import commum_page from "../../support/pages/commum_page"
import cadastro_usuario_page from "../../support/pages/cadastro_usuario_page"

import {faker} from '@faker-js/faker'

describe('Cadastro de usuário com sucesso', () => {
  
  beforeEach('Acessar o cadastro de usuario', () => {

    commum_page.acessarCadastroUsuario()
    
  })

  it('Cadastrar um usuario com sucesso', () => {
  
    cadastro_usuario_page.informarNome(faker.person.fullName())
    cadastro_usuario_page.informarEmail(faker.internet.email())
    cadastro_usuario_page.informarSenha(faker.internet.password())
    cadastro_usuario_page.clicarBotaoCadastrar()
    cadastro_usuario_page.mensagemSucesso()

  })
    
  })