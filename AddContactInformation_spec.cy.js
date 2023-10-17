describe("Website form login bad password user - ", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("#email").type("magill131@gmail.com");
      cy.get("#password").type("Tbarto12%");
      cy.get("#submit").click();
   });
    it("should fill out the form", () => {
      cy.get("#add-contact").click();
      cy.get("#firstName").type("Tom");
      cy.get("#lastName").type("Magill");
      cy.get("#submit").click();
      cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/contactList")
    });
  });