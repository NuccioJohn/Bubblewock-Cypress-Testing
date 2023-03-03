/// <reference types="Cypress" />

describe("Make sure navigation to login page works", () => {


    before(function() {
        cy.visit("/");
        cy.fixture("userDetails").as("user")
    })

    it("Verify that user is on the signup page then click on '' Button", () => {
        cy.get('.navigation-items > :nth-child(2) > a').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .firebaseui-idp-button').click();
        cy.wait(1000);
        cy.get("@user").then((user) => {
            cy.get('#ui-sign-in-email-input').type(user.email);
        }).then(() => {
            cy.get('.firebaseui-id-submit').click();
        });
        cy.get("@user").then((user) => {
            cy.get('#ui-sign-in-password-input').type(user.password);
        }).then(() => {
            cy.get('.firebaseui-id-submit').click();
        })
        cy.wait(1000);
        cy.get('li.ng-star-inserted > .ng-star-inserted > .user-avatar').click();
        cy.wait(1000);
        cy.get("@user").then((user) => {
            cy.get('.nav-username').contains(("Hobo^"+user.player_tag));
        }).then(() => {
            cy.get(':nth-child(6) > .mat-list-item-content > .nav-caption').click();
        });
        cy.wait(1000);
        cy.get('.login-form > h1').should("text", "Login to Bubblewock");
    });    
})
