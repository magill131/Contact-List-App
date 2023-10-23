describe("Check previous page - ", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("#email").type("magill131@gmail.com");
      cy.get("#password").type("Tbarto12%");
      cy.get("#submit").click();
   });
    it("should fill out the form", () => {
      cy.get("#add-contact").click();
      cy.go("back")
      cy.url().should("contains", "contactList")
    });
  });