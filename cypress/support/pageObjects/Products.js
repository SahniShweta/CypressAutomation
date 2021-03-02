class Products
{
    getCheckout(){
        return cy.get('a.nav-link.btn.btn-primary')
    }

    getTitle(){
        return cy.get('h4.card-title')
    }

    getAddButton(){
        return cy.get('button.btn.btn-info')
    }
   
}
export default Products
