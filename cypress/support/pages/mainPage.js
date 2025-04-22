export class MainPage {

    visit() {
      cy.visit('/');
    }
  
    getTitle() {
      return cy.title();
    }
  
    getSearchInput() {
        return cy.get('#qusearchfield');
    }
    getRegistrationLink() {
        return cy.get('a[data-gat="header;genericNavi;Anmelden"]');
    }
  
    getLogo() {
        return cy.get('svg.icon.bde-logo.pull-left');
    }
    getNewsletterInput() {
        return cy.get('#form_email_benefit');
    }

  }
  
  export const mainPage = new MainPage();
  