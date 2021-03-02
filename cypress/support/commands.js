import Products from '../support/pageObjects/Products'

const product = new Products()
Cypress.Commands.add("selectProduct", (productName) => {
    product.getTitle().each(($el, index, $list) => {
        if($el.text().includes(productName)){
            product.getAddButton().eq(index).click()
           
        }
     })


})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
