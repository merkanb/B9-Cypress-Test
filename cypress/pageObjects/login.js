export class Login{
    navigate(){
        cy.visit(Cypress.env("baseUrl"))
    }
    title(){
        cy.title().should('eq','STORE')
    }
    loginBtn(){
        cy.get('#login2').click().wait(500)
        return this
    }
    username(){
        cy.get('#loginusername').type(Cypress.env("username")).wait(500)
        return this
    }
    password(){
        cy.get('#loginpassword').type(Cypress.env("password")).wait(500)
        return this
    }
    submitBtn(){
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click().wait(500)
        return this
    }
    assertnameOfUser(){
        cy.get('#nameofuser').should('be.visible')
    }
}