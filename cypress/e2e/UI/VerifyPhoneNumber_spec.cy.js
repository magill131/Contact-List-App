describe("Verify phone number - ", () => {
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
      cy.get("#email").type("tmagill@gmail.com")
      cy.get("#phone").type("22979")
      cy.get("#submit").click();
      cy.get("#error").should("contain", "phone: Phone number is invalid")
    });
  });