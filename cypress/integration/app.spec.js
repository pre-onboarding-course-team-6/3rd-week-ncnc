/* eslint-disable quotes */
describe("Cypress E2E test start", () => {
  describe("Home page render test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Home page AppBar test", () => {
      cy.get(".AppBar").contains("니콘내콘");
      cy.get(".AppBar > div > button").should("have.class", "MenuIcon");
    });
  });

  describe("Contacts page render test", () => {
    beforeEach(() => {
      cy.visit("/contacts");
    });
    it("Contacts page render test", () => {
      cy.get(".AppBar").contains("고객센터");
      cy.get(".AppBar > div > button").should("have.class", "XIcon");
    });
  });

  describe("Category page render test", () => {
    beforeEach(() => {
      cy.visit("/categories/1");
    });
    it("Category page AppBar test", () => {
      cy.get(".AppBar").contains("땡철이");
      cy.get(".AppBar > div > button").should("have.class", "BackIcon");
    });
  });

  describe("Brand page render test", () => {
    beforeEach(() => {
      cy.visit("/brands/63");
    });
    it("Brand page AppBar test", () => {
      cy.get(".AppBar").contains("스타벅스");
      cy.get(".AppBar > div > button").should("have.class", "BackIcon");
    });
  });
});
