describe("Login", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    });
    it("should fill out the form", () => {
        cy.get("#email").type("Tbuch12@gmail.com");
        cy.get("#password").type("Tbarto12%");
    
        cy.get("#submit").click();
        cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/contactList")
    });
});