/// <reference types= "cypress" />

export default {

    informarNome(nome){
        cy.get('#user')
                .type(nome)
    },
    
    informarEmail(email){
        cy.get('#email')
                .type(email)
    },

    informarSenha(senha){
        cy.get('#password')
            .type(senha)
    },

    clicarBotaoCadastrar(){
        cy.get('#btnRegister')
            .click()
    },

    mensagemSucesso(){
        cy.get('#swal2-title')
            .contains('Cadastro realizado!')
                .should('be.visible')
    }

}