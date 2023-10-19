describe("Verify Sign Up", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("#signup").click();
    });
    it("should fill out the form", () => {
        cy.get("#firstName").type("Travis");
        cy.get("#lastName").type("Buchanon");
        cy.get("#email").type("Tbuch12@gmail.com");
        cy.get("#password").type("Tbarto12%");
    
        cy.get("#submit").click();
        cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/contactList")
      });
});