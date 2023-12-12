///<reference types="cypress" />

/*
describe('Login Test Suit', () => {
    it('TC002 positive scenario', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.loginCommand('merkanb', '1234567Aa')
        cy.get('#nameofuser').should('be.visible')

    })
})
*/



describe('Login Test Suit', () => {
    it('TC002 positive scenario', () => {
        cy.visit(Cypress.env("baseUrl"))
        cy.loginCommand(Cypress.env("username"), Cypress.env("password"))
        cy.get('#nameofuser').should('be.visible')

    })
})

