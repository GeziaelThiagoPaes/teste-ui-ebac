/// <reference types = "cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('Deve selecionar um produto na lista', () => {   
       cy.get('[class ="product-block grid"]')
       //.eq(2)
       //first()
       //last()
       .contains('Ajax Full-Zip Sweatshirt')
       .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10;
        cy.get('[class ="product-block grid"]').contains('Abominable Hoodie').click()

        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click() 
        
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });
});