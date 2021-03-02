///<reference types="Cypress" />
import CheckOutPage from '../../../../support/pageObjects/CheckOutPage'
import HomePage from '../../../../support/pageObjects/HomePage'
import Products from '../../../../support/pageObjects/Products'
import PurchasePage from '../../../../support/pageObjects/PurchasePage'
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

const homePage = new HomePage()
const product = new Products()
const checkoutPage = new CheckOutPage()
const purchasePage = new PurchasePage()
let name

Given('I open ecommerce page', ()=>
{
    cy.visit(Cypress.env('url'))
})

When('I add items to cart', function(){
    homePage.getShopTab().click()

        const product = new Products()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        product.getCheckout().click()
})

And('Validate the total prices', ()=>{
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
})

Then('select the country submit and verify message', ()=>{
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

When('I fill the form details', function(dataTable){
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('validate the forms behavior', function(){
    homePage.getBindingText().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEnterpreneur().should('be.disabled')

})

And('select the shop page', ()=>{
    homePage.getShopTab().click()
})