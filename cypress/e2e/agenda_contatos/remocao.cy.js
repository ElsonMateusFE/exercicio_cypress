/// <reference types="cypress" />

describe('Teste de alteração', () => {
    before(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve alterar contatos', () => {
        cy.get('.delete').first().click()
        cy.screenshot('remocao de contato')
    })
})
