/// <reference types= "cypress" />

export default {

    acessarCadastroUsuario(){
        cy.visit('/')
            .contains(' Cadastro')
                .click()
        
    },

    acessarLoginUsuario(){
        cy.visit('/')
            .contains(' Login')
                .click()

    }
}