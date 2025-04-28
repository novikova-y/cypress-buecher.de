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
      { name: 'Logo', element: () => mainPage.getLogo() },
      { name: 'Search input', element: () => mainPage.getSearchInput() },
      { name: 'Registration link', element: () => mainPage.getRegistrationLink() },
      { name: 'Wishlist icon', element: () => mainPage.getWishlistIcon() },
      { name: 'Payback icon', element: () => mainPage.getPaybackIcon() },
      { name: 'Shopping basket', element: () => mainPage.getShoppingBasket() },
      { name: 'Banner slider', element: () => mainPage.getBannerSlider() },
    ];

    const sections = [
      mainPage.getBuchSection,
      mainPage.getEBookSection,
      mainPage.getTolinoSection,
      mainPage.getHörbuchSection,
      mainPage.getKinderbuchSection,
      mainPage.getJugendbuchSection,
      mainPage.getRatgeberSection,
      mainPage.getSchuleSection,
      mainPage.getKalenderSection,
      mainPage.getEnglischeBuecherSection,
      mainPage.getSaleSection,
      mainPage.getSpielzeugSection,
      mainPage.getMusikSection,
      mainPage.getFilmSection,
      mainPage.getGamesSection,
      mainPage.getFanartikelSection,
      mainPage.getTechnikSection,
      mainPage.getWohnenSection,
      mainPage.getSchreibwarenSection,
      mainPage.getBuchreihenSection,
      mainPage.getMagazinSection,
    ];

    mainElements.forEach(({ name, element }) => {
      it(`should display the ${name}`, () => {
        element().should('be.visible');
      });
    });

    it('should display all sections', () => {
      sections.forEach(section => section().should('be.visible'));
    });
  });

  describe('Sidebar elements', () => {
    const sidebarSections = [
      mainPage.getSidebarBestsellerSection,
      mainPage.getSidebarNeuheitenSection,
      mainPage.getSidebarVorschauSection,
      mainPage.getSidebarPreishitsSection,
      mainPage.getSidebarGeschenkgutscheineSection,
      mainPage.getSidebarBuchreihenSection,
      mainPage.getSidebarKochbuchshopSection,
      mainPage.getSidebarGregShopSection,
      mainPage.getSidebarReisefuehrerSection,
      mainPage.getSidebarStarWarsShopSection,
      mainPage.getSidebarNintendoShopSection,
      mainPage.getSidebarStabiloShopSection,
      mainPage.getSidebarBravoHitsSection,
      mainPage.getSidebarLegoshopSection,
      mainPage.getSidebarGUShopSection,
    ];

    const bestsellerBlocks = [
      mainPage.getBestsellerBooksBlock,
      mainPage.getBestsellerMoviesBlock,
      mainPage.getBestsellerMusicBlock,
      mainPage.getBestsellerToysBlock,
      mainPage.getBestsellerGamesBlock,
      mainPage.getBestsellerStationeryBlock,
    ];

    it('should display all Sidebar sections', () => {
      sidebarSections.forEach(section => section().should('be.visible'));
    });

    it('should display all Bestseller blocks', () => {
      bestsellerBlocks.forEach(block => block().should('be.visible'));
    });
  });

  describe('Footer elements', () => {
    const footerLinks = [
      mainPage.getFooterAccountLink,
      mainPage.getFooterGutscheinLink,
      mainPage.getFooterLieferungLink,
      mainPage.getFooterRuecksendungLink,
      mainPage.getFooterWiderrufLink,
      mainPage.getFooterRechnungLink,
      mainPage.getFooterPaypalLink,
      mainPage.getFooterKreditkarteLink,
      mainPage.getFooterKontaktLink,
      mainPage.getFooterGeschenkgutscheineLink,
      mainPage.getFooterDatenschutzLink,
      mainPage.getFooterFaqLink,
      mainPage.getFooterAgbLink,
      mainPage.getFooterUeberUnsLink,
      mainPage.getFooterImpressumLink,
      mainPage.getFooterPartnerprogrammLink,
      mainPage.getFooterPressemitteilungenLink,
    ];

    it('should display all Footer links', () => {
      footerLinks.forEach(link => link().should('be.visible'));
    });
  });

  describe('Social media and service icons', () => {
    const socialIcons = [
      mainPage.getFacebookIcon,
      mainPage.getInstagramIcon,
      mainPage.getYouTubeIcon,
      mainPage.getRechnungIcon,
      mainPage.getPayPalIcon,
      mainPage.getKreditkarteIcon,
      mainPage.getPaybackServiceIcon,
      mainPage.getDeutschePostDHLIcon,
    ];

    it('should display all social media and service icons', () => {
      socialIcons.forEach(icon => icon().should('be.visible'));
    });
  });
});
