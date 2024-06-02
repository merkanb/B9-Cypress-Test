///<reference types="cypress" />
import { Login } from "../../pageObjects/login"   // import pageObjects classes : Login  

const login = new Login()         // creating an object from Login class 

describe('Login Test Suit', () => {
    it('TC003 positive scenario', () => {
        login.navigate()
        login.title()
    })

    it('TC004 positive scenario', () => {
        login.navigate()
        login.title()
        login.loginBtn()
        login.username()
        login.password()
        login.submitBtn()
        login.assertnameOfUser()
    })

    // to chain these methods with the others need to define methods as < return to this > in related pageObjects file (login.js)
    it('TC005 positive scenario', () => {
        login.navigate()
        login.title()
        login.loginBtn()
            .username()
            .password()
            .submitBtn()
        login.assertnameOfUser()
    })

})

/**
 * to run in terminal
 * npx cypress run       // run all test under e2e
 * npx cypress run --spec "cypress\e2e\day1\firstTest.cy.js"
 * npx cypress run --spec "cypress\e2e\day2\pomEx.cy.js"
 * npx cypress run --spec "cypress\e2e\day2"
 * // npx cypress run --spec "HERE WE ADD RELATIVE PATH"
 * // RELATIVE PATH MAY BE: cypress\e2e\day02\firstTest.cy.js   OR   cypress\e2e\day02 INSIDE THE  " "
 * to run different browser
 * 
 * npx cypress run --browser firefox --spec "cypress\e2e\day1\firsttest.cy.js"
 * 
 */