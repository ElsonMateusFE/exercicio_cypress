/// <reference types="cypress" />

describe('Teste de alteração', () => {
    before(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve alterar contatos', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').type('.')
        cy.get('input[type="email"]').type('.br')
        cy.get('input[type="tel"]').type('0')
        cy.get('.alterar').click()
        cy.screenshot('alteracao de contato')
    })
})
