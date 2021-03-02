///<reference types="Cypress" />



describe('My First Test Suite', function()
{
    it('My First test Suite', function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

            "name":"Learn Appium Automation with Java",
            "isbn":"shsa3",
            "aisle":"227",
            "author":"JP"
            }).then((response) => {
                expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.eql(200)
            })
    })
})