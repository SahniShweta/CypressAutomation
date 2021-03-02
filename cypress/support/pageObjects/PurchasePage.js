class PurchasePage
{
    getCountry()
    {
        return cy.get('#country')
    }

    getSuggestedCountry(){
        return cy.get('.suggestions > ul > li > a')
    }

    getTermsCheckbox()
    {
        return cy.get('#checkbox2')
    }

    getPurchaseButton()
    {
        return cy.get("input[type='submit']")
    }

    
    getAlert()
    {
        return cy.get('.alert')
    }
     
}
export default PurchasePage
