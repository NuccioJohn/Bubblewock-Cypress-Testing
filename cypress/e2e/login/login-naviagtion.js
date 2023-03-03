/// <reference types="Cypress" />

describe("Make sure navigation to login page works", () => {


    beforeEach(() => {
        cy.visit('/')
    })

    it("Should be able to navigate to the login page", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('.navigation-items > :nth-child(2) > a').click();
        cy.get('.login-form > h1').should("text", "Login to Bubblewock");

    });

    it("Should be able to navigate to the login page from the signup page using nav bar", () => {
        cy.get('[style="margin-right: 10px;"] > a').click();
        cy.get('app-signup.ng-star-inserted > h1').should("text", "Create a Bubblewock Account");
        cy.get('.navigation-items > :nth-child(2) > a').click();
        cy.get('.login-form > h1').should("text", "Login to Bubblewock");
    });

    it("Should be able to navigate to the login page from the signup page using 'Already have an account?'", () => {
        cy.get('h3 > a').click();
        cy.get('app-signup.ng-star-inserted > h1').should("text", "Create a Bubblewock Account");
        cy.get('h3 > a').click();
        cy.get('.login-form > h1').should("text", "Login to Bubblewock");
    });
    
})
