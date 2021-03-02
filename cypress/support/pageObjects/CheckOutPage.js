class CheckOutPage
{
    getAmounts()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotal(){
        return cy.get('h3 strong')
    }

    getCheckoutButton()
    {
        return cy.contains('Checkout')
    }
     
}
export default CheckOutPage
