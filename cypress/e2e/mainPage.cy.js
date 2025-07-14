import { mainPage } from "../support/pages/mainPage";

describe('Buecher.de main page', () => {
  beforeEach(() => {
    cy.setConsentCookies();
    mainPage.visit();
  });

  it('should load the main page and check the title', () => {
    mainPage.getTitle().should('include', 'bücher.de');
  });

  describe('Main page elements', () => {
    const mainElements = [
      { name: 'logo', getter: mainPage.getLogo },
      { name: 'search input', getter: mainPage.getSearchInput },
      { name: 'registration link', getter: mainPage.getRegistrationLink },
      { name: 'wishlist icon', getter: mainPage.getWishlistIcon },
      { name: 'payback icon', getter: mainPage.getPaybackIcon },
      { name: 'shopping basket', getter: mainPage.getShoppingBasket },
      { name: 'newsletter button', getter: mainPage.getNewsletterButton },
      { name: 'newsletter input', getter: mainPage.getNewsletterInput }
    ];

    it('should display all main page elements', () => {
      mainElements.forEach(({ getter, name }) => {
        getter().should('be.visible');
      });
    });
  });

  describe('Footer elements', () => {
    const footerLinks = [
      mainPage.getFooterOrdersLink,
      mainPage.getFooterRuecksendungLink,
      mainPage.getFooterWiderrufLink,
      mainPage.getFooterRechnungLink,
      mainPage.getFooterPaypalLink,
      mainPage.getFooterKreditkarteLink,
      mainPage.getFooterOtherPaymentMethodsLink,
      mainPage.getFooterKontaktLink,
      mainPage.getFooterLieferungLink,
      mainPage.getFooterDatenschutzLink,
      mainPage.getFooterFaqLink,
      mainPage.getFooterAgbLink,
      mainPage.getFooterImpressumLink,
      mainPage.getFooterPartnerprogrammLink,
      mainPage.getFooterPressemitteilungenLink,
    ];

    it('should display all footer links', () => {
      footerLinks.forEach(getter => {
        getter().should('be.visible');
      });
    });
  });

  describe('Social media and service icons', () => {
    const socialIcons = [
      mainPage.getFacebookIcon,
      mainPage.getInstagramIcon,
      mainPage.getYouTubeIcon,
      mainPage.getTikTokIcon,
      mainPage.getRechnungIcon,
      mainPage.getPayPalIcon,
      mainPage.getKreditkarteIcon,
    ];

    it('should display social media and service icons', () => {
      socialIcons.forEach(getter => {
        getter().should('be.visible');
      });
      // Scroll only for the one element that requires it
      mainPage.getPaybackServiceIcon().scrollIntoView().should('be.visible');
    });
  });
});
