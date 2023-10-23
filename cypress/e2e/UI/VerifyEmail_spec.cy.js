describe("Verify email - ", () => {
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
      cy.get("#email").type("cwmagill.com")
      cy.get("#submit").click();
      cy.get("#error").should("contain", "email: Email is invalid")
    });
  });