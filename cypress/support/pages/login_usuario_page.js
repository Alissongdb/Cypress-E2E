/// <reference types= "cypress" />

export default {
    

    informarEmail(email){
        cy.get('#user')
                .type(email)
    },

    informarSenha(senha){
        cy.get('#password')
            .type(senha)
    },

    clicarBotaoLogin(){
        cy.get('#btnLogin')
            .click()
    },

    mensagemLoginSucesso(){
        cy.get('h2[class="swal2-title"]')
            .contains('Login realizado')
                .should('be.visible')
    },

    clicarBotaoOkMsgSucesso(){
        cy.get('button[class="swal2-confirm swal2-styled"]')
            .click()
    }

}