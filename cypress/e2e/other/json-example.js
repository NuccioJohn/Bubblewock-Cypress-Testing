/// <reference types="Cypress" />

describe("JSON Object Examples", () => {
    it("JSON object examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObjects = [{"key0": "Luke"}, {"key1": "John"}, {"key2": "Bob"}, {"key3": "Luna"}];

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"]); //TIm
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key2);

        cy.log(exampleArrayOfValues[0]); //Sophie
        cy.log(exampleArrayOfValues[1]); //Rose
        cy.log(exampleArrayOfValues[2]);

        cy.log(users.Students[0].lastName)

        for(let i = 0; i < exampleArrayOfObjects.length; i++){
            const key = "key" + i;
            cy.log(exampleArrayOfObjects[i][key]);
        }
    });
})
