import { mainPage } from "../support/pages/mainPage";

describe('Buecher.de section transitions', () => {
  const sections = [
    { name: 'Bestseller', getter: () => mainPage.getSidebarBestsellerSection(), title: 'Topseller' },
    { name: 'Neuheiten', getter: () => mainPage.getSidebarNeuheitenSection(), title: 'Neuheiten' },
    { name: 'Vorschau', getter: () => mainPage.getSidebarVorschauSection(), title: 'Vorschau' },
    { name: 'Preishits', getter: () => mainPage.getSidebarPreishitsSection(), title: 'Preishits' },
    { name: 'Geschenkgutscheine', getter: () => mainPage.getSidebarGeschenkgutscheineSection(), title: 'Geschenkgutscheine' },
    { name: 'Buchreihen', getter: () => mainPage.getSidebarBuchreihenSection(), title: 'Buchreihen' },
    { name: 'Kochbuchshop', getter: () => mainPage.getSidebarKochbuchshopSection(), title: 'Kochbücher' },
    { name: 'Greg-Shop', getter: () => mainPage.getSidebarGregShopSection(), title: 'Gregs Tagebuch' },
    { name: 'Reiseführer', getter: () => mainPage.getSidebarReisefuehrerSection(), title: 'Reiseführer' },
    { name: 'Star Wars-Shop', getter: () => mainPage.getSidebarStarWarsShopSection(), title: 'Star Wars Shop' },
    { name: 'Nintendo-Shop', getter: () => mainPage.getSidebarNintendoShopSection(), title: 'Nintendo Shop' },
    { name: 'STABILO-Shop', getter: () => mainPage.getSidebarStabiloShopSection(), title: 'STABILO Markenshop' },
    { name: 'Bravo Hits', getter: () => mainPage.getSidebarBravoHitsSection(), title: 'Bravo Hits' },
    { name: 'LEGO® Shop', getter: () => mainPage.getSidebarLegoshopSection(), title: 'LEGO®' },
    { name: 'GU-Shop', getter: () => mainPage.getSidebarGUShopSection(), title: 'GU Verlag' },
  ];

  beforeEach(() => {
    cy.setConsentCookies();
    mainPage.visit();
  });

  sections.forEach(({ name, getter, title }) => {
    it(`should navigate to the ${name} section when clicked`, () => {
      getter().click();
      mainPage.getTitle().should('include', title);
    });
  });
});
