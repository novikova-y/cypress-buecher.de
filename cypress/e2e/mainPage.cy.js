import { mainPage } from "../support/pages/mainPage";

describe('Buecher.de main page', () => {
  beforeEach(() => {
    // Set cookies for consent acceptance
    cy.setConsentCookies();
    mainPage.visit();
  });

  it('should load the main page and check the title', () => {
    mainPage.getTitle().should('include', 'bücher.de');
  });

  describe('Main page elements', () => {
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

    it('should display the Newsletter registration button', () => {
      mainPage.getNewsletterButton().should('be.visible');
    });

    it('should display the Newsletter registration email input', () => {
      mainPage.getNewsletterButton().should('be.visible');
    });

  });

  // describe('Footer elements', () => {
  //   it('should display Footer links', () => {
  //     mainPage.getFooterAccountLink().should('be.visible');
  //     mainPage.getFooterGutscheinLink().should('be.visible');
  //     mainPage.getFooterLieferungLink().should('be.visible');
  //     mainPage.getFooterRuecksendungLink().should('be.visible');
  //     mainPage.getFooterWiderrufLink().should('be.visible');
  //     mainPage.getFooterRechnungLink().should('be.visible');
  //     mainPage.getFooterPaypalLink().should('be.visible');
  //     mainPage.getFooterKreditkarteLink().should('be.visible');
  //     mainPage.getFooterKontaktLink().should('be.visible');
  //     mainPage.getFooterGeschenkgutscheineLink().should('be.visible');
  //     mainPage.getFooterDatenschutzLink().should('be.visible');
  //     mainPage.getFooterFaqLink().should('be.visible');
  //     mainPage.getFooterAgbLink().should('be.visible');
  //     mainPage.getFooterUeberUnsLink().should('be.visible');
  //     mainPage.getFooterImpressumLink().should('be.visible');
  //     mainPage.getFooterPartnerprogrammLink().should('be.visible');
  //     mainPage.getFooterPressemitteilungenLink().should('be.visible');
  //   });
  // });

  // describe('Social media and service icons', () => {
  //   it('should display social media and service icons', () => {
  //     mainPage.getFacebookIcon().should('be.visible');
  //     mainPage.getInstagramIcon().should('be.visible');
  //     mainPage.getYouTubeIcon().should('be.visible');
  //     mainPage.getRechnungIcon().should('be.visible');
  //     mainPage.getPayPalIcon().should('be.visible');
  //     mainPage.getKreditkarteIcon().should('be.visible');
  //     mainPage.getPaybackServiceIcon().should('be.visible');
  //     mainPage.getDeutschePostDHLIcon().should('be.visible');
  //   });
  // });
});
