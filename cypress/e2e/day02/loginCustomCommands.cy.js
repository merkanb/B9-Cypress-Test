///<reference types="cypress" />

/*
describe('Login Test Suit', () => {
    it('TC002 positive scenario', () => {
        cy.visit('https://www.demoblaze.com/')          // we can provide url directly 
        cy.loginCommand('merkanb', '1234567Aa')      // we can provide parameters directly 
        cy.get('#nameofuser').should('be.visible')

    })
})
*/

describe('Login Test Suit', () => {
    it('TC002 positive scenario', () => {
        cy.visit(Cypress.env("baseUrl"))        // or we can define url in cypress.config.js 
        // loginCommand  is an defined command/method in support folder --> command.js file / like Browser utils class methods
        // cy.loginCommand('miky', 'Test1234')          // we can provide parameters directly 
        cy.loginCommand(Cypress.env("username"), Cypress.env("password")) // or we can define parameters in cypress.config.js
        cy.get('#nameofuser').should('be.visible')
        cy.get('#nameofuser').should("contain.text", 'merkanb')
    })
})

// calling environmental variable from cypress.config.js is case sensitive / best pratice copy from here and past  
