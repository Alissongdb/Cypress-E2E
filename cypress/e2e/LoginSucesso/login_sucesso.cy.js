import commum_page from "../../support/pages/commum_page"
import login_usuario_page from "../../support/pages/login_usuario_page"

describe('Login com sucesso', () => {
  
  beforeEach('Realizar o login com sucesso', () => {

    commum_page.acessarLoginUsuario()
    
  })

  it('Realizar o login com sucesso', () => {
  
    login_usuario_page.informarEmail('Florian_Boyle@hotmail.com')
    login_usuario_page.informarSenha('gWCoK27hztACRtP')
    login_usuario_page.clicarBotaoLogin()
    login_usuario_page.mensagemLoginSucesso()
    login_usuario_page.clicarBotaoOkMsgSucesso()

  })
    
  })