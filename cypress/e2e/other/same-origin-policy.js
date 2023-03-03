/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it.skip("Validates visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/');

    });

    it("Validates visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    it('Origin command', () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/")
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/")
        })

        // cy.visit("http://www.webdriveruniversity.com");
        // cy.visit("http://selectors.webdriveruniversity.com");

    });   
})
