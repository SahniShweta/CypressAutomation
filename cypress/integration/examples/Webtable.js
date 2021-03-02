///<reference types="Cypress" />

describe('My First Test Suite', function(){
    it('My First test Suite', function(){
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('tr td:nth-child(2)').each(($e1, index, $list)=>{

            const text = $e1.text()
            if(text.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal("25")

                })
            }

        })

       // cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        
    })
})