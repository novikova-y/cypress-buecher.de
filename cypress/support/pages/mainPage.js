export class MainPage {

    visit() {
      cy.visit('https://www.buecher.de/');
    }
  
    getTitle() {
      return cy.title();
    }
  
    getSearchInput() {
        return cy.get('#qusearchfield');
    }
  
    getLogo() {
        return cy.get('svg.icon.bde-logo.pull-left');
    }
    getNewsletterInput() {
        return cy.get('#form_email_benefit');
    }

  }
  
  export const mainPage = new MainPage();
  