class HomePage
{
    getEditBox()
    {
        return cy.get('form div:nth-child(1) input')
    }

    getGender(){
        return cy.get('select')
    }

    getBindingText()
    {
        return cy.get('h4 input')
    }
    getEnterpreneur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
   
}
export default HomePage
