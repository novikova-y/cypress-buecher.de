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

  it('should display Newsletter button', () => {
    mainPage.getNewsletterButton().should('be.visible');
  });

  it('should display Banner', () => {
    mainPage.getBanner().should('be.visible');
  });

  it('should display Bestseller Section', () => {
    mainPage.getSidebarBestsellerSection().should('be.visible');
  });

  it('should display Neuheiten Section', () => {
    mainPage.getSidebarNeuheitenSection().should('be.visible');
  });
  
  it('should display Vorschau Section', () => {
    mainPage.getSidebarVorschauSection().should('be.visible');
  });
  
  it('should display Preishits Section', () => {
    mainPage.getSidebarPreishitsSection().should('be.visible');
  });
  
  it('should display Geschenkgutscheine Section', () => {
    mainPage.getSidebarGeschenkgutscheineSection().should('be.visible');
  });

  it('should display Sidebar Buchreihen Section', () => {
    mainPage.getSidebarBuchreihenSection().should('be.visible');
  });

  it('should display Sidebar Kochbuchshop Section', () => {
    mainPage.getSidebarKochbuchshopSection().should('be.visible');
  });
  
  it('should display Sidebar Greg-Shop Section', () => {
    mainPage.getSidebarGregShopSection().should('be.visible');
  });
  
  it('should display Sidebar Reiseführer Section', () => {
    mainPage.getSidebarReisefuehrerSection().should('be.visible');
  });
  
  it('should display Sidebar Star Wars-Shop Section', () => {
    mainPage.getSidebarStarWarsShopSection().should('be.visible');
  });
  
  it('should display Sidebar Nintendo-Shop Section', () => {
    mainPage.getSidebarNintendoShopSection().should('be.visible');
  });
  
  it('should display Sidebar STABILO-Shop Section', () => {
    mainPage.getSidebarStabiloShopSection().should('be.visible');
  });
  
  it('should display Sidebar Bravo Hits Section', () => {
    mainPage.getSidebarBravoHitsSection().should('be.visible');
  });
  
  it('should display Sidebar LEGO® Shop Section', () => {
    mainPage.getSidebarLegoshopSection().should('be.visible');
  });
  
  it('should display Sidebar GU-Shop Section', () => {
    mainPage.getSidebarGUShopSection().should('be.visible');
  });

  it('should display the Newsletter-signup input', () => {
    mainPage.getNewsletterInput().should('be.visible');
  });
});
