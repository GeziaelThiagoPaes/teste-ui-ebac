/// <reference types= "cypress"/>


context('funcionalidade login', () => {
// Hooks : BeforeEatch (colocar uma instrução antes de executar o teste) e afterEatch (colocar instrução após o teste)"
//Faker traz valores randomicos para serem utlizados como dados "Evitando alterar os dados a cada teste"

   beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });

   //afterEach(() => {
      //cy.screenshot()
  // });//

   it('Deve fazer login com sucesso', () => {

      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain', 'Minha conta')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Jenkins (não é Jenkins? Sair)')

   })

   it('Deve exibir uma mensagem de erro ao inserir usuario inválida', () => {
      cy.get('#username').type('teste@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail teste@teste.com está incorreta. Perdeu a senha?')
   });

   it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('123456')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida')
   });

});