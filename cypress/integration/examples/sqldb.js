///<reference types="Cypress" />

import { Context } from "mocha";

context('Window', () => {
    it('Database Interaction', () => {
        cy.sqlServer("select top 2 * from Person.Person").then(function(result){
            console.log(result[0][1])
            console.log(result[0][4])
        })


       
    })
})