/// <reference types= "cypress" />

export default {

    clicarNoShop(){
        cy.get('.header-logo > .logo > a > img')
            .click()
    },

    clicarNoProduto(){
        cy.get('img[src="/static/media/offer1.3657bf3e.png"]')
            .click()
    },

    clicandoNoProdutoEscolhido(){
        cy.get(':nth-child(1) > .product_wrappers_one > .thumb > .image > .hover-image')
            .click({ waitForAnimations: false })
    },

    adicionarNoCarrinho(){
        cy.get('[class="theme-btn-one btn-black-overlay btn_sm"]')
            .click()
    },

    clicarNoCarrinho(){
        cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa')
            .click()
    },

    clicarEmCheckout(){
        cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one')
            .click()
    },

    InsereFirstNameFat(firstname){
        cy.get('#fname')
            .type(firstname)

    },

    InsereLastNameFat(lastname){
        cy.get('#lname')
            .type(lastname)

    },

    InsereCompanyNameFat(companyname){
        cy.get('#cname')
            .type(companyname)

    },

    InsereEmailFat(email){
        cy.get('#email')
            .type(email)

    },

    InsereCountryFat(){
        cy.get('#country')
            .select(1)

    },

    InsereCityFat(){
        cy.get('#city')
            .select(2)

    },

    InsereZipcodeFat(zipcode){
        cy.get('#zip')
            .type(zipcode)

    },

    InsereAddressFat(address){
        cy.get('#faddress')
            .type(address)

    },

    InsereMessagesFat(messages){
        cy.get('#messages')
            .type(messages)

    },

    clicarBotaoSalvarFat(){
        cy.get('[class="theme-btn-one btn-black-overlay btn_sm"]')
            .click({multiple: true})
                .get('.close > span')
                    .click()

    },

    choosePayment(){
        cy.get('label[for="css"]')
            .click()

    },

    clicarBotaoPlaceOrderFat(){
        cy.get('[class="theme-btn-one btn-black-overlay btn_sm"]')
            .click({ multiple: true })

    },

    ValidaMensagemPedidoSucesso(){
        cy.contains('Order success!')
            .should('be.visible')

    },
       
}