///<reference types="Cypress" />

describe('My First Test Suite', function(){
    it('My First test Suite', function(){
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item').each(($e1, index , $list)=>{
            if($e1.text()=='India')
            {
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')

        //visible and non visible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radiobutton
        cy.get('[value="radio2"]').check().should('be.checked')

        //alert and confirm button
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert', (str)=>{
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        cy.on('window:Confirm', (str)=>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
        
    })
})