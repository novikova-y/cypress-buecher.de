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
    getBuchSection() {
        return cy.get('a[data-gat="primaryNavi;Buch"]');
    }
    getEBookSection() {
        return cy.get('a[data-gat="primaryNavi;eBook"]');
    }
    getTolinoSection() {
        return cy.get('a[data-gat="primaryNavi;tolino"]');
    }
    getHörbuchSection() {
        return cy.get('a[data-gat="primaryNavi;Hörbuch"]');
    }
    getKinderbuchSection() {
        return cy.get('a[data-gat="primaryNavi;Kinderbuch"]');
    }
    getJugendbuchSection() {
        return cy.get('a[data-gat="primaryNavi;Jugendbuch"]');
    }
    getRatgeberSection() {
        return cy.get('a[data-gat="primaryNavi;Ratgeber"]');
    }
    getSchuleSection() {
        return cy.get('a[data-gat="primaryNavi;Schule"]');
    }
    getKalenderSection() {
        return cy.get('a[data-gat="primaryNavi;Kalender"]');
    }
    getEnglischeBuecherSection() {
        return cy.get('a[data-gat="primaryNavi;Englische Bücher"]');
    }
    getSaleSection() {
        return cy.get('a[data-gat="primaryNavi;SALE"]');
    }
    getSpielzeugSection() {
        return cy.get('a[data-gat="primaryNavi;Spielzeug"]');
    }
    getMusikSection() {
        return cy.get('a[data-gat="primaryNavi;Musik"]');
    }
    getFilmSection() {
        return cy.get('a[data-gat="primaryNavi;Film"]');
    }
    getGamesSection() {
        return cy.get('a[data-gat="primaryNavi;Games"]');
    }
    getFanartikelSection() {
        return cy.get('a[data-gat="primaryNavi;Fanartikel"]');
    }
    getTechnikSection() {
        return cy.get('a[data-gat="primaryNavi;Technik"]');
    }
    getWohnenSection() {
        return cy.get('a[data-gat="primaryNavi;Wohnen & Leben"]');
    }
    getSchreibwarenSection() {
        return cy.get('a[data-gat="primaryNavi;Schreibwaren"]');
    }
    getBuchreihenSection() {
        return cy.get('a[data-gat="primaryNavi;Buchreihen"]');
    }
    getMagazinSection() {
        return cy.get('a[data-gat="primaryNavi;Magazin"]');
    }
    getServicePortalButton() {
        return cy.get('#chatbot-start-icon');
    }
    getNewsletterInput() {
        return cy.get('#form_email_benefit');
    }

  }
  
  export const mainPage = new MainPage();
  