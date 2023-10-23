describe("Ensure password strength has requirements", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("#signup").click();
    });
    it("should fill out the form", () => {
        cy.get("#firstName").type("Travis");
        cy.get("#lastName").type("Buchanon");
        cy.get("#email").type("roguenet40@gmail.com");
        cy.get("#password").type("fjaihlkzkl");
        cy.intercept('/contactList').as('contactList')
        cy.get("#submit").click();
        cy.wait(['@contactList'])
        cy.url().should("not.eq", "https://thinking-tester-contact-list.herokuapp.com/contactList")
        
      });
});