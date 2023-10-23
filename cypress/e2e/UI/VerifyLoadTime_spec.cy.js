describe("Verify load time", () => {
    beforeEach(() => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    });
    it("should fill out the form", () => {
        cy.get("#email").type("Tbuch12@gmail.com");
        cy.get("#password").type("Tbarto12%");
    
        cy.get("#submit").click();
        const t0 = performance.now()
        cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/contactList")
        cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
        cy.get("#add-contact").click();
        cy.url().should("eq", "https://thinking-tester-contact-list.herokuapp.com/addContact")
        const t2 = performance.now()
        cy.wrap(performance.now()).then(t1 => {
        cy.log(`Page load took ${t1 - t0} milliseconds.`);
});
    });
})})