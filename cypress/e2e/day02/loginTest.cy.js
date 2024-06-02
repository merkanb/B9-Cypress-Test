///<reference types="cypress" />
describe('Login Test Suit', () => {
    it('TC001 positive scenario', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.viewport(1080, 800)
        // cy.viewport('iphone-8') 
        // cy.viewport('')       // inside single quotes it shows possible alternatives
        cy.viewport('macbook-16')
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type('miky').wait(500)
        cy.get('#loginpassword').type('Test1234').wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click().wait(500)
        cy.get('#nameofuser').should('be.visible')
        cy.get('#nameofuser').should("contain.text", 'miky')

    })
})

