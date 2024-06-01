///<reference types="cypress" />
describe('Web elements',()=>{         // test suit structure
    it('First test',()=>{           // test case structure
        // tag name
        cy.get('h1')
        // By id
        cy.get("#loginpaage-input-email")
        // By className
        cy.get('.lead')
        cy.get('.large.test-primary')    // fill the blanks with .
        // By attribute name
        cy.get('[placeholder]')
        // By attribute name and value             // att. name and value all together may be unique !!! 
        cy.get('[placeholder="Email Address"]')
        // By tag name and attribute name and value
        cy.get('input[placeholder="Email Address"]')         // this one also may be unique (with tag name)
        // by two different atttributes or more
        cy.get('input[placeholder="Email Address"][name="email"]')      //  2 or more att. names and values
        
        cy.contains('Blue').click()     //  ***   


    })
}) 