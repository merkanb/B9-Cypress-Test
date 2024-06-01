// cypress reference type
///<reference types="cypress" />

// visit
cy.visit('open url')
cy.visit('url', {timeout:10000})

// should is a promise in here
cy.url().should('include', path)

// finding element
cy.get(loc).click()                      // loc is some locator, and it have to be css, cypress work with css
cy.get(loc).should('be.visible')
cy.get(loc).should('not.be.visible')

cy.get('h1').should('have.text', 'Sign In')
cy,get('input').should('have.value', 'James')

// parent to child or child to parent 
cy.get(loc).first()      // go to first child element
cy.get(loc).last()         // go to last child element
cy.get(loc).eq(3).click()       // 3. child - index no 3
cy.get(loc).next().click()      //  ??? following sibling 

cy.go('back')       // come back to prev. page

//web table-multiple:true is condition:if there is next 
cy.get('rt-tbody').nextAll().click({multiple:true})  

cy.get(loc).prev().click()      // prev. one
cy.get(loc).prevAll().click()


// position handle
cy.get(loc).click('top')
cy.get(loc).click("bottom")

// hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger("mouseup").click()

// login
cy.get('#loginpage-input-email').clear().type('username')

