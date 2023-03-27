/// <reference types = "cypress"/>
// Hooks : BeforeEatch (colocar uma instrução antes de executar o teste) e afterEatch (colocar instrução após o teste)
const { faker } = require("@faker-js/faker");

describe('Funcionalidade Pré cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso!', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('@Teste125')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.firstName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});