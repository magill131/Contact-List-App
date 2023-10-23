describe("Ensure authentication is secure - ", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("#email").type("magill131@gmail.com");
      cy.get("#password").type("Tbarto12%");
   });
    it("should not fill out the form", () => {
      cy.intercept('/contactList').as('contactList')
      cy.get("#submit").click();
      cy.wait(['@contactList'])
      cy.go("back")
      cy.go("forward")
      cy.wait(['@contactList'])
      cy.url().should("not.eq", "https://thinking-tester-contact-list.herokuapp.com/contactList")
    });
  });