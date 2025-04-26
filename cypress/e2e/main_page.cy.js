import { mainPage } from "../support/pages/mainPage";

describe('Buecher.de main page', () => {
  beforeEach(() => {
    // Set cookies for consent acceptance
    cy.setCookie('klaro', JSON.stringify({
      "buecher_session": true,
      "google_services_session": false,
      "klaro": true,
      "buecher_statistics": false,
      "google_services_statistics": false,
      "buecher_personalization": false,
      "buecher_advertising": false,
      "adtraction": false,
      "awin": false,
      "billiger": false,
      "bing": false,
      "connexity": false,
      "taboola": false,
      "criteo": false,
      "facebook": false,
      "getback": false,
      "google_ads": false,
      "google_analytics": false,
      "gumgum": false,
      "outbrain": false,
      "rtb_house": false,
      "tradedoubler": false,
      "xandr": false,
      "necessary": false,
      "functional": false,
      "personalization": false,
      "marketing": false
    }));
    mainPage.visit();
  });

  it('should load the main page and check the title', () => {
    mainPage.getTitle().should('include', 'bücher.de');
  });

  it('should display the logo', () => {
    mainPage.getLogo().should('be.visible');
  });

  it('should display the search input', () => {
    mainPage.getSearchInput().should('be.visible');
  });

  it('should display the registration link', () => {
    mainPage.getRegistrationLink().should('be.visible');
  });

  it('should display the Wishlist icon', () => {
    mainPage.getWishlistIcon().should('be.visible');
  });

  it('should display the Payback icon', () => {
    mainPage.getPaybackIcon().should('be.visible');
  });

  it('should display the Shopping basket', () => {
    mainPage.getShoppingBasket().should('be.visible');
  });

  it('should display Buch section', () => {
    mainPage.getBuchSection().should('be.visible');
  });

  it('should display eBook section', () => {
    mainPage.getEBookSection().should('be.visible');
  });

  it('should display tolino section', () => {
    mainPage.getTolinoSection().should('be.visible');
  });

  it('should display Hörbuch section', () => {
    mainPage.getHörbuchSection().should('be.visible');
  });

  it('should display Kinderbuch section', () => {
    mainPage.getKinderbuchSection().should('be.visible');
  });
  
  it('should display Jugendbuch section', () => {
    mainPage.getJugendbuchSection().should('be.visible');
  });
  
  it('should display Ratgeber section', () => {
    mainPage.getRatgeberSection().should('be.visible');
  });
  
  it('should display Schule section', () => {
    mainPage.getSchuleSection().should('be.visible');
  });
  
  it('should display Kalender section', () => {
    mainPage.getKalenderSection().should('be.visible');
  });
  
  it('should display Englische Bücher section', () => {
    mainPage.getEnglischeBuecherSection().should('be.visible');
  });
  
  it('should display SALE section', () => {
    mainPage.getSaleSection().should('be.visible');
  });
  
  it('should display Spielzeug section', () => {
    mainPage.getSpielzeugSection().should('be.visible');
  });
  
  it('should display Musik section', () => {
    mainPage.getMusikSection().should('be.visible');
  });
  
  it('should display Film section', () => {
    mainPage.getFilmSection().should('be.visible');
  });
  
  it('should display Games section', () => {
    mainPage.getGamesSection().should('be.visible');
  });
  
  it('should display Fanartikel section', () => {
    mainPage.getFanartikelSection().should('be.visible');
  });
  
  it('should display Technik section', () => {
    mainPage.getTechnikSection().should('be.visible');
  });
  
  it('should display Wohnen & Leben section', () => {
    mainPage.getWohnenSection().should('be.visible');
  });
  
  it('should display Schreibwaren section', () => {
    mainPage.getSchreibwarenSection().should('be.visible');
  });
  
  it('should display Buchreihen section', () => {
    mainPage.getBuchreihenSection().should('be.visible');
  });
  
  it('should display Magazin section', () => {
    mainPage.getMagazinSection().should('be.visible');
  });

  it('should display Service-Portal button', () => {
    mainPage.getServicePortalButton().should('be.visible');
  });

  it('should display the Newsletter-signup input', () => {
    mainPage.getNewsletterInput().should('be.visible');
  });
});
