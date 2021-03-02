///<reference types="Cypress" />

describe('My First Test Suite', function(){
    it('My First test Suite', function(){
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',4);
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4);
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            const text = $e1.find('h4.product-name').text();
            if(text.includes('Cashews')){
                $e1.find('button').click();

            }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
        })

    })
})