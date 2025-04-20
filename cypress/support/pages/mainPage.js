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
        return cy.get('a[href="https://www.buecher.de/"] .bde-logo');
    }
    
  }
  
  export const mainPage = new MainPage();
  