import { mainPage } from "../support/pages/mainPage";

describe('Add book to cart flow', () => {
  const bookTitle = "All the King's Men";
  const productId = "22922676";

  beforeEach(() => {
    cy.setConsentCookies();
    mainPage.visit();
  });

  it('should search for a book, add it to the cart, and verify it in the cart', () => {
    // Search for the book by title
    mainPage.getSearchInput().type(`${bookTitle}{enter}`);

    // Click on the book link by product ID and verify it contains the book title
    cy.get(`a[data-pid="${productId}"]`)
      .should('contain', bookTitle)
      .click();

    // Verify the product title is visible on the book details page
    cy.get('[data-behavior="productTitle"]')
      .should('be.visible')
      .and('contain', bookTitle);

    // Click on the "Add to cart" button
    cy.contains('button[title="In den Warenkorb"]', 'In den Warenkorb')
      .first()
      .click();

    // Verify the success message confirming the item was added to the cart
    cy.get('h1')
      .should('contain', 'Der Artikel wurde dem Warenkorb hinzugefügt!');

    // Close the confirmation modal
    cy.get('button.close[data-behavior="close"]')
      .click();

    // Confirm the modal has been closed
    cy.get('button.close[data-behavior="close"]').should('not.exist');

    // Navigate back to the homepage
    mainPage.visit();

    // Open the shopping cart
    mainPage.getShoppingBasket().click();

    // Verify the book is present in the shopping cart by checking the title
    cy.get('.title')
      .should('contain', bookTitle);
  });
});
