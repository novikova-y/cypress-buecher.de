import { mainPage } from "../support/pages/mainPage";

describe('Buecher.de section transitions', () => {
  beforeEach(() => {
    cy.setConsentCookies();
    mainPage.visit();
  });

  it('should navigate to the Bestseller section when clicked', () => {
    mainPage.getSidebarBestsellerSection().click();
    mainPage.getTitle().should('include', 'Topseller');
  });

  it('should navigate to the Neuheiten section when clicked', () => {
    mainPage.getSidebarNeuheitenSection().click();
    mainPage.getTitle().should('include', 'Neuheiten');
  });

  it('should navigate to the Vorschau section when clicked', () => {
    mainPage.getSidebarVorschauSection().click();
    mainPage.getTitle().should('include', 'Vorschau');
  });

  it('should navigate to the Preishits section when clicked', () => {
    mainPage.getSidebarPreishitsSection().click();
    mainPage.getTitle().should('include', 'Preishits');
  });

  it('should navigate to the Geschenkgutscheine section when clicked', () => {
    mainPage.getSidebarGeschenkgutscheineSection().click();
    mainPage.getTitle().should('include', 'Geschenkgutscheine');
  });

  it('should navigate to the Buchreihen section when clicked', () => {
    mainPage.getSidebarBuchreihenSection().click();
    mainPage.getTitle().should('include', 'Buchreihen');
  });

  it('should navigate to the Kochbuchshop section when clicked', () => {
    mainPage.getSidebarKochbuchshopSection().click();
    mainPage.getTitle().should('include', 'Kochbücher');
  });

  it('should navigate to the Greg-Shop section when clicked', () => {
    mainPage.getSidebarGregShopSection().click();
    mainPage.getTitle().should('include', 'Gregs Tagebuch');
  });

  it('should navigate to the Reiseführer section when clicked', () => {
    mainPage.getSidebarReisefuehrerSection().click();
    mainPage.getTitle().should('include', 'Reiseführer');
  });

  it('should navigate to the Star Wars-Shop section when clicked', () => {
    mainPage.getSidebarStarWarsShopSection().click();
    mainPage.getTitle().should('include', 'Star Wars Shop');
  });

  it('should navigate to the Nintendo-Shop section when clicked', () => {
    mainPage.getSidebarNintendoShopSection().click();
    mainPage.getTitle().should('include', 'Nintendo Shop');
  });

  it('should navigate to the STABILO-Shop section when clicked', () => {
    mainPage.getSidebarStabiloShopSection().click();
    mainPage.getTitle().should('include', 'STABILO Markenshop');
  });

  it('should navigate to the Bravo Hits section when clicked', () => {
    mainPage.getSidebarBravoHitsSection().click();
    mainPage.getTitle().should('include', 'Bravo Hits');
  });

  it('should navigate to the LEGO® Shop section when clicked', () => {
    mainPage.getSidebarLegoshopSection().click();
    mainPage.getTitle().should('include', 'LEGO®');
  });

  it('should navigate to the GU-Shop section when clicked', () => {
    mainPage.getSidebarGUShopSection().click();
    mainPage.getTitle().should('include', 'GU Verlag');
  });
 
});
