///<reference types="cypress" />

describe("first test suit",function(){
    it("test case 1", function(){
        cy.visit('https://www.google.com/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('#APjFqb').should('be.visible').type('cypress{enter}').wait(500)
        cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
        .click().wait(500)
        // cy.get('.tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').wait(1000).click()
    

        //         cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .notranslate > .GTRloc > .VuuXrf')
// .wait(500)
// .click()




    })
})