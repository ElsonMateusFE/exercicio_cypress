/// <reference types="cypress" />

describe('Teste de inclusão', () => {
    before(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve incluir dados de um novo contato', () => {
        cy.get('input[type="text"]').type('elson mateus')
        cy.get('input[type="email"]').type('elsonmateusfe97@gmail.com')
        cy.get('input[type="tel"]').type('11977445213')
        cy.get('.adicionar').click()
        cy.screenshot('adicao de contato')
    })
})
