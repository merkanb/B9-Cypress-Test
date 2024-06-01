///<reference types="cypress" />
describe('Web elements',()=>{
    it('First test',()=>{
        // tag name
        cy.get('h1')
        // By id
        cy.get("#loginpaage-input-email")
        // By className
        cy.get('.led')
        cy.get('.large.test-primary')    // fill the blanks with .
        // By attribute name
        cy.get('[placeholder]')
        // By attribute name and value
        cy.get('[placeholder="Email Address"]')
        // By tag name and attribute name and value
        cy.get('input[placeholder="Email Address"]')
        // by two different atttributes or more
        cy.get('input[placeholder="Email Address"][name="email"]')
        
        cy.contains('Blue').click()


    })
})