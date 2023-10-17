describe("Redirect Sign Up", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("#signup").click();
  
      
    });
    it("should redirect to signup", () => {
        cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/addUser")
    });
});