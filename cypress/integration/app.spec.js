/* eslint-disable quotes */
const MENU = {
  니콘내콘: "니콘내콘",
  마이페이지: "마이페이지",
  고객센터: "고객센터",
};

const CATEGORY = {
  땡철이: "땡철이",
  카페: "카페",
};

const BRAND = {
  엔제리너스커피: "엔제리너스커피",
  스타벅스: "스타벅스",
};

const HOME = "http://localhost:3000/";

describe("Cypress E2E test start", () => {
  describe("Home page render test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Home page AppBar test", () => {
      cy.get(".AppBar").contains(MENU.니콘내콘);
      cy.get(".AppBar > div > button").should("have.class", "MenuIcon");
    });
    it("Home page Component render test", () => {
      cy.get(".Banner").find("img").should("be.visible");
      cy.get(".HomeCategory > div > div").should(($categoty) => {
        expect($categoty).to.have.length(9);
      });
      cy.get(".SoonList").should("be.visible");
      cy.get(".CompanyContent").should("be.visible");
      cy.get(".moreCompanyInfoOpen").click();
      cy.get(".moreCompanyInfo").should("be.visible");
      cy.get(".moreCompanyInfoClose").click();
      cy.get(".moreCompanyInfo").should("not.exist");
    });
    it("Category link test", () => {
      cy.contains(CATEGORY.땡철이).click();
      cy.url().should("eq", `${HOME}categories/1`);
      cy.get(".AppBar").contains(CATEGORY.땡철이);
    });
    it("My page render test", () => {
      cy.get(".MenuIcon").click();
      cy.get(".AppBar").contains(MENU.마이페이지);
      cy.get(".AppBar > div > button").should("have.class", "XIcon");
      cy.contains(MENU.고객센터).click();
      cy.url().should("eq", `${HOME}contacts`);
    });
  });

  describe("Contacts page render test", () => {
    beforeEach(() => {
      cy.visit("/contacts");
    });
    it("Contacts page AppBar test", () => {
      cy.get(".AppBar").contains(MENU.고객센터);
      cy.get(".AppBar > div > button").should("have.class", "XIcon").click();
      cy.url().should("have.eq", HOME);
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
      function ClickFirstAnswer() {
        cy.get(".FAQList > div:first > button").click();
        cy.get(".FAQList > div:first > div").should("be.visible");
        cy.get(".FAQList > div:first > button").click();
        cy.get(".FAQList > div:first > div").should("not.exist");
      }
      ClickFirstAnswer();
      cy.contains("판매").click();
      ClickFirstAnswer();
    });
  });

  describe("Category page render test", () => {
    beforeEach(() => {
      cy.visit("/categories/1");
    });
    it("Category page AppBar test", () => {
      cy.get(".AppBar > div > h2").contains(CATEGORY.땡철이);
      cy.visit("/");
      cy.contains(CATEGORY.땡철이).click();
      cy.get(".AppBar > div > button").should("have.class", "BackIcon").click();
      cy.url().should("have.eq", HOME);
    });
    it("Category menu link test", () => {
      cy.get(".CategoryMenu > div > div> button").should(($menu) => {
        expect($menu).to.have.length(9);
      });
      cy.contains(CATEGORY.카페).click();
      cy.url().should("have.eq", `${HOME}categories/67`);
      cy.get(".HomeCategory").should("be.visible");
    });
    it("Category link test", () => {
      cy.get(".HomeCategory > div > div:first > div > a")
        .click()
        .should(($target) => {
          expect($target.text()).equal(BRAND.엔제리너스커피);
        });
      cy.get(".HomeCategory > div > div:first").click();
      cy.url().should("include", "/brands/");
    });
  });

  describe("Brand page render test", () => {
    beforeEach(() => {
      cy.visit("/brands/63");
    });
    it("Brand page AppBar test", () => {
      cy.visit("/categories/67");
      cy.contains(BRAND.스타벅스).click();
      cy.url().should("have.eq", `${HOME}brands/63`);
      cy.get(".AppBar").contains(BRAND.스타벅스);
      cy.get(".AppBar > div > button").should("have.class", "BackIcon").click();
      cy.url().should("have.eq", `${HOME}categories/67`);
    });
    it("Brand page render test", () => {
      cy.get(".ProductList").should("be.visible");
    });
  });

  describe("Item page render test", () => {
    beforeEach(() => {
      cy.visit("/items/137");
    });
    it("Brand page AppBar test", () => {
      cy.visit("/brands/63");
      cy.get(".ProductList  > div:first").click();
      cy.url().should("have.eq", `${HOME}items/137`);
      cy.get(".AppBar > div > button").should("have.class", "BackIcon").click();
      cy.url().should("have.eq", `${HOME}brands/63`);
    });
    it("Brand page render test", () => {
      cy.contains(BRAND.스타벅스);
      cy.contains("카페아메리카노 T");
      cy.contains("3,600");
      cy.get(".SelectOption").click();
      cy.get(".OptionSelectBox > div:first").click();
      cy.get(".cancelBtn").click();
      cy.get(".OptionSelectBox > div:first").click();
      cy.contains("구매하기").click();
    });
  });
});
