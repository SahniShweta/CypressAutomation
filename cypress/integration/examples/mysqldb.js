///<reference types="Cypress" />

import { Context } from "mocha";

context('Window', () => {
    it('Database Interaction', () => {
        cy.task("queryDb","SELECT * FROM apidevelop.books limit 1;").then((count) => {
            expect(count).to.have.lengthOf(1);
            console.log(count[0]['BookName'])
            console.log(count[0]['isbn'])
            console.log(count[0]['aisle'])
            console.log(count[0]['author'])
        })


       
    })
})