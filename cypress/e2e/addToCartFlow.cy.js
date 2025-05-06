import { mainPage } from "../support/pages/mainPage";

describe('add book to a cart flow', () => {
  const bookTitle = "All the King's Men";

  beforeEach(() => {
    cy.setConsentCookies();
    mainPage.visit();
  });

  it('should search for a book, add it to the cart, and verify it in the cart', () => {
    mainPage.getSearchInput().type(`${bookTitle}{enter}`);

    cy.get('a[data-pid="22922676"]')
        .should('contain', bookTitle)
        .click();

    cy.get('[data-behavior="productTitle"]').should('be.visible');

    cy.contains('button[title="In den Warenkorb"]', 'In den Warenkorb')
        .first()
        .click();
    cy.get('h1').should('contain', 'Der Artikel wurde dem Warenkorb hinzugefügt!');
    cy.get('button.close[data-behavior="close"]').click();

    mainPage.visit();

    mainPage.getShoppingBasket().click();

    cy.get('.title a[href*="all-the-kings-men"]').should('contain', bookTitle);

  });
});
