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

    it('should display the Banner Slider', () => {
      mainPage.getBannerSlider().should('be.visible');
    });

    it('should display sections', () => {
      mainPage.getBuchSection().should('be.visible');
      mainPage.getEBookSection().should('be.visible');
      mainPage.getTolinoSection().should('be.visible');
      mainPage.getHörbuchSection().should('be.visible');
      mainPage.getKinderbuchSection().should('be.visible');
      mainPage.getJugendbuchSection().should('be.visible');
      mainPage.getRatgeberSection().should('be.visible');
      mainPage.getSchuleSection().should('be.visible');
      mainPage.getKalenderSection().should('be.visible');
      mainPage.getEnglischeBuecherSection().should('be.visible');
      mainPage.getSaleSection().should('be.visible');
      mainPage.getSpielzeugSection().should('be.visible');
      mainPage.getMusikSection().should('be.visible');
      mainPage.getFilmSection().should('be.visible');
      mainPage.getGamesSection().should('be.visible');
      mainPage.getFanartikelSection().should('be.visible');
      mainPage.getTechnikSection().should('be.visible');
      mainPage.getWohnenSection().should('be.visible');
      mainPage.getSchreibwarenSection().should('be.visible');
      mainPage.getBuchreihenSection().should('be.visible');
      mainPage.getMagazinSection().should('be.visible');
    });
  });

  describe('Sidebar elements', () => {
    it('should display Sidebar sections', () => {
      mainPage.getSidebarBestsellerSection().should('be.visible');
      mainPage.getSidebarNeuheitenSection().should('be.visible');
      mainPage.getSidebarVorschauSection().should('be.visible');
      mainPage.getSidebarPreishitsSection().should('be.visible');
      mainPage.getSidebarGeschenkgutscheineSection().should('be.visible');
      mainPage.getSidebarBuchreihenSection().should('be.visible');
      mainPage.getSidebarKochbuchshopSection().should('be.visible');
      mainPage.getSidebarGregShopSection().should('be.visible');
      mainPage.getSidebarReisefuehrerSection().should('be.visible');
      mainPage.getSidebarStarWarsShopSection().should('be.visible');
      mainPage.getSidebarNintendoShopSection().should('be.visible');
      mainPage.getSidebarStabiloShopSection().should('be.visible');
      mainPage.getSidebarBravoHitsSection().should('be.visible');
      mainPage.getSidebarLegoshopSection().should('be.visible');
      mainPage.getSidebarGUShopSection().should('be.visible');
    });

    it('should display Bestseller blocks', () => {
      mainPage.getBestsellerBooksBlock().should('be.visible');
      mainPage.getBestsellerMoviesBlock().should('be.visible');
      mainPage.getBestsellerMusicBlock().should('be.visible');
      mainPage.getBestsellerToysBlock().should('be.visible');
      mainPage.getBestsellerGamesBlock().should('be.visible');
      mainPage.getBestsellerStationeryBlock().should('be.visible');
    });
  });

  describe('Footer elements', () => {
    it('should display Footer links', () => {
      mainPage.getFooterAccountLink().should('be.visible');
      mainPage.getFooterGutscheinLink().should('be.visible');
      mainPage.getFooterLieferungLink().should('be.visible');
      mainPage.getFooterRuecksendungLink().should('be.visible');
      mainPage.getFooterWiderrufLink().should('be.visible');
      mainPage.getFooterRechnungLink().should('be.visible');
      mainPage.getFooterPaypalLink().should('be.visible');
      mainPage.getFooterKreditkarteLink().should('be.visible');
      mainPage.getFooterKontaktLink().should('be.visible');
      mainPage.getFooterGeschenkgutscheineLink().should('be.visible');
      mainPage.getFooterDatenschutzLink().should('be.visible');
      mainPage.getFooterFaqLink().should('be.visible');
      mainPage.getFooterAgbLink().should('be.visible');
      mainPage.getFooterUeberUnsLink().should('be.visible');
      mainPage.getFooterImpressumLink().should('be.visible');
      mainPage.getFooterPartnerprogrammLink().should('be.visible');
      mainPage.getFooterPressemitteilungenLink().should('be.visible');
    });
  });

  describe('Social media and service icons', () => {
    it('should display social media and service icons', () => {
      mainPage.getFacebookIcon().should('be.visible');
      mainPage.getInstagramIcon().should('be.visible');
      mainPage.getYouTubeIcon().should('be.visible');
      mainPage.getRechnungIcon().should('be.visible');
      mainPage.getPayPalIcon().should('be.visible');
      mainPage.getKreditkarteIcon().should('be.visible');
      mainPage.getPaybackServiceIcon().should('be.visible');
      mainPage.getDeutschePostDHLIcon().should('be.visible');
    });
  });
});
