export class MainPage {

    visit() {
      cy.visit('/');
    }
  
    getTitle() {
      return cy.title();
    }
    getLogo() {
        return cy.get('svg.icon.bde-logo.pull-left');
    }
    getSearchInput() {
        return cy.get('#qusearchfield');
    }
    getRegistrationLink() {
        return cy.get('a[data-gat="header;genericNavi;Anmelden"]');
    }
    getWishlistIcon() {
        return cy.get('a[data-gat="header;genericNavi;Merkliste"]');
    }
    getPaybackIcon() {
        return cy.get('img.logo-payback');
    }
    getShoppingBasket() {
        return cy.get('a[data-gat="header;Warenkorb"]');
    }
    getNewsletterInput() {
        return cy.get('#form_email_benefit');
    }

  }
  
  export const mainPage = new MainPage();
  