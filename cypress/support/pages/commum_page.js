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

    },

    acessarContaUsuario(){

        cy.visit('/')
        .contains(' Login')
            .click()

        cy.get('#user')
            .type('Florian_Boyle@hotmail.com')

        cy.get('#password')
            .type('gWCoK27hztACRtP')

        cy.get('#btnLogin')
            .click()

        cy.get('button[class="swal2-confirm swal2-styled"]')
            .click()
        
        }
    }
