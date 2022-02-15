/* eslint-disable quotes */
describe("Cypress E2E test start", () => {
  // describe("Home page render test", () => {
  //   beforeEach(() => {
  //     cy.visit("/");
  //   });
  //   it("Home page AppBar test", () => {
  //     cy.get(".AppBar").contains("니콘내콘");
  //     cy.get(".AppBar > div > button").should("have.class", "MenuIcon");
  //   });
  //   it("Home page Component render test", () => {
  //     cy.get(".Banner").find("img").should("be.visible");
  //     cy.get(".HomeCategory > div > div").should(($categoty) => {
  //       expect($categoty).to.have.length(9);
  //     });
  //     cy.get(".ProductList").should("be.visible");
  //     cy.get(".CompanyContent").should("be.visible");
  //     cy.get(".moreCompanyInfoOpen").click();
  //     cy.get(".moreCompanyInfo").should("be.visible");
  //     cy.get(".moreCompanyInfoClose").click();
  //     cy.get(".moreCompanyInfo").should("not.exist");
  //   });
  //   it("Category link test", () => {
  //     cy.contains("땡철이").click();
  //     cy.url().should("eq", "http://localhost:3000/categories/1");
  //     cy.get(".AppBar").contains("땡철이");
  //   });
  //   it("My page render test", () => {
  //     cy.get(".MenuIcon").click();
  //     cy.get(".AppBar").contains("마이페이지");
  //     cy.get(".AppBar > div > button").should("have.class", "XIcon");
  //     cy.contains("고객센터").click();
  //     cy.url().should("eq", "http://localhost:3000/contacts");
  //   });
  // });

  describe("Contacts page render test", () => {
    beforeEach(() => {
      cy.visit("/contacts");
    });
    it("Contacts page AppBar test", () => {
      cy.get(".AppBar").contains("고객센터");
      cy.get(".AppBar > div > button").should("have.class", "XIcon").click();
      cy.url().should("have.eq", "http://localhost:3000/");
    });
    it("1:1 kakao channel link test", () => {
      cy.get(".kakaoChannel")
        .should("have.attr", "href")
        .and("include", "https://pf.kakao.com/_dHxold");
    });
    it("FAQ box render test", () => {
      cy.get(".FAQBox > div > button").should(($btn) => {
        expect($btn).to.have.length(2);
      });
      cy.get(".FAQList > div:first > button").click();
      cy.get(".FAQList > div:first > div").should("be.visible");
      cy.get(".FAQList > div:first > button").click();
      cy.get(".FAQList > div:first > div").should("not.exist");
      cy.contains("판매").click();
      cy.get(".FAQList > div:first > button").click();
      cy.get(".FAQList > div:first > div").should("be.visible");
      cy.get(".FAQList > div:first > button").click();
      cy.get(".FAQList > div:first > div").should("not.exist");
    });
  });

  // describe("Category page render test", () => {
  //   beforeEach(() => {
  //     cy.visit("/categories/1");
  //   });
  //   it("Category page AppBar test", () => {
  //     cy.get(".AppBar").contains("땡철이");
  //     cy.get(".AppBar > div > button").should("have.class", "BackIcon");
  //   });
  // });

  // describe("Brand page render test", () => {
  //   beforeEach(() => {
  //     cy.visit("/brands/63");
  //   });
  //   it("Brand page AppBar test", () => {
  //     cy.get(".AppBar").contains("스타벅스");
  //     cy.get(".AppBar > div > button").should("have.class", "BackIcon");
  //   });
  // });
});
