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
 
});
