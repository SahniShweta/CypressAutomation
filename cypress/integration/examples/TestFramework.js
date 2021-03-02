///<reference types="Cypress" />
import CheckOutPage from '../../support/pageObjects/CheckOutPage'
import HomePage from '../../support/pageObjects/HomePage'
import Products from '../../support/pageObjects/Products'
import PurchasePage from '../../support/pageObjects/PurchasePage'

describe('My First Test Suite', function()
{
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })


    it('My First test Suite', function(){

        const homePage = new HomePage()
        const checkoutPage = new CheckOutPage()
        const product = new Products()
        const purchasePage = new PurchasePage()

        cy.visit(Cypress.env('url'))
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getBindingText().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEnterpreneur().should('be.disabled')
        homePage.getShopTab().click()

        
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        product.getCheckout().click()

        //summation of price
        var sum =0
        checkoutPage.getAmounts().each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(' ')
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(function(){
            cy.log(sum)
        })
        
        checkoutPage.getTotal().then(function(element){
            
            const amount = element.text()
            var res = amount.split(' ')
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        checkoutPage.getCheckoutButton().click()
        purchasePage.getCountry().type('India')
        purchasePage.getSuggestedCountry().click()

       purchasePage.getTermsCheckbox().click({force: true})
        purchasePage.getPurchaseButton().click()
        //cy.get('.alert').should('have.text','×Success! Thank you! Your order will be delivered in next few weeks :-)')
        purchasePage.getAlert().then(function(element){
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })



        
    })
})