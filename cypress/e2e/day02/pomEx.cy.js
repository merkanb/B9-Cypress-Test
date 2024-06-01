///<reference types="cypress" />
import { Login } from "../../pageObjects/login"

const login = new Login()

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
 * npx cypress run 
 * npx cypress run --spec "cypress\e2e\day1\firstTest.cy.js"
 * 
 * to run different browser
 * 
 * npx cypress run --browser firefox --spec "cypress\e2e\day1\firsttest.cy.js"
 * 
 */