///<reference types="Cypress" />

describe('My First Test Suite', function(){
    it('My First test Suite', function(){
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
       
        cy.get('.products').as('productLocator')
     

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const text = $e1.find('h4.product-name').text();
            if(text.includes('Cashews')){
                $e1.find('button').click();

            }
        })
       
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(4000)
        cy.contains('Place Order').click()
        
    })
})