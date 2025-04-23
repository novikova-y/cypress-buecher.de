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
  });

  it('should load the main page and check the title', () => {
    mainPage.visit();
    mainPage.getTitle().should('include', 'bücher.de');
  });

  it('should display the logo', () => {
    mainPage.visit();
    mainPage.getLogo().should('be.visible');
  });

  it('should display the search input', () => {
    mainPage.visit();
    mainPage.getSearchInput().should('be.visible');
  });

  it('should display the registration link', () => {
    mainPage.visit();
    mainPage.getRegistrationLink().should('be.visible');
});

it('should display the Wishlist icon', () => {
  mainPage.visit();
  mainPage.getWishlistIcon().should('be.visible');
});

it('should display the Payback icon', () => {
  mainPage.visit();
  mainPage.getPaybackIcon().should('be.visible');
});

it('should display the Shopping basket', () => {
  mainPage.visit();
  mainPage.getShoppingBasket().should('be.visible');
});

  it('should display the Newsletter-signup input', () => {
    mainPage.visit();
    mainPage.getNewsletterInput().should('be.visible');
  });
});
