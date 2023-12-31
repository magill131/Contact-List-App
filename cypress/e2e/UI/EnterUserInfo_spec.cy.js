const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
describe("Enter user info", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("#signup").click();
    });
    it("should fill out the form", () => {
        cy.get("#firstName").type("Travis");
        cy.get("#lastName").type("Buchanon");
        cy.get("#email").type(`${id}@gmail.com`);
        cy.get("#password").type("Tbarto12%");
    
        cy.get("#submit").click();
        cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/contactList")
      });
});