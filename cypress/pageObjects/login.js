export class Login{           // in order to call from outside we defined export class ...
    navigate(){
        cy.visit(Cypress.env("baseUrl"))
    }
    title(){
        cy.title().should('eq','STORE')
    }
    loginBtn(){
        cy.get('#login2').click().wait(500)
        return this                            // to chain these methods with the others we made < return to this >
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