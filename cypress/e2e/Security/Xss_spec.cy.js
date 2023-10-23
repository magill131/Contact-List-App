describe("Make sure XSS Script input is not accepted", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("#signup").click();
    });
    it("should fill out the form", () => {
        cy.get("#firstName").type("Travis");
        cy.get("#lastName").type("Buchanon");
        cy.get("#email").type("roguenet12@gmail.com");
        cy.get("#password").type("LZ8fI2JJj7<p>abc");
        cy.intercept('/contactList').as('contactList')
        cy.get("#submit").click();
        cy.wait(['@contactList'])
        cy.url().should("not.eq", "https://thinking-tester-contact-list.herokuapp.com/contactList")
        
      });
});