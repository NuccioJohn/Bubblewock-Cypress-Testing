/// <reference types="Cypress" />

describe("Make sure navigation to login page works", () => {


    before(() => {
        cy.visit("/");
    })

    it("Verify that user is on the signup page then click on '' Button", () => {
        cy.get('[style="margin-right: 10px;"] > a').click();
        cy.wait(1000);
        cy.get('app-signup.ng-star-inserted > h1').should("text", "Create a Bubblewock Account");
        cy.get('.mat-primary').click();

        cy.get('#mat-input-0').type("test@hotmail.com");
        cy.get('#mat-input-1').type("HHHhhhh689606969");
        cy.get('#cdk-step-content-0-0 > .stepper-buttons > .mat-focus-indicator').click();
        cy.wait(1000);
        cy.get('#mat-input-2').type("John Doe");
        cy.get('#mat-input-3').type("taggyTest");
        cy.get('#cdk-step-content-0-1 > .stepper-buttons > .mat-primary').click();
        cy.wait(1000);

    });

    // it("Should be able to navigate to the signup page from the login page using 'Don't have an account?'", () => {
    //     cy.get('#cdk-step-content-0-0 > .title').contains("Step 1 of 3");
    // });
    
})
