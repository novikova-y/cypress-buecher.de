import { mainPage } from "../support/pages/mainPage";

describe('Add book to cart flow', () => {
  // Load book data from fixture before the tests
  before(function () {
    cy.fixture('books').then((books) => {
      this.books = books;
    });
  });

  beforeEach(() => {
    cy.setConsentCookies();
    mainPage.visit();
  });

  it('should search for a book, add it to the cart, and verify it in the cart', function () {
    const book = this.books.allTheKingsMen;

    // Search for the book by title
    mainPage.getSearchInput().type(`${book.title}{enter}`);

    // Click on the book link by product ID and verify it contains the book title
    cy.get(`a[data-behavior="productTitle"][href*="${book.productId}"]`)
      .should('contain', book.title)
      .click();

    // Verify the product title is visible on the book details page
    cy.get('[data-behavior="productTitle"]')
      .should('be.visible')
      .and('contain', book.title);

    // Click on the "Add to cart" button
    cy.contains('button[data-behavior="buyBtn"]', 'In den Warenkorb').first().click();

    // Assert that the button text changed and became disabled
    cy.get(`form[data-pid="${book.productId}"] button[data-behavior="buyBtn"]`)
      .should('contain', 'Im Warenkorb')
      .and('be.disabled');

    // Navigate back to the homepage
    mainPage.visit();

    // Open the shopping cart
    mainPage.getShoppingBasket().click();

    // Verify the book is present in the shopping cart by checking the title
    cy.get(`a[href*="${book.productId}"]`).should('contain', book.title);
  });
});
