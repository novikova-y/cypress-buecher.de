import { mainPage } from "../support/pages/mainPage";

describe('Add book to cart API test', () => {
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

  it('should add a book to the cart and confirm the POST request', function () {
    const book = this.books.derZauberberg;

    // Intercept the POST request for adding the book to the cart, using productId from fixture
    cy.intercept('POST', `/go/ajax_ajaxssl/cart_add_item/prod_id/${book.productId}/`).as('addToCart');

    // Search for the book and navigate to its page
    mainPage.getSearchInput().type(`${book.title}{enter}`);
    cy.get(`a[data-pid="${book.productId}"]`).click();

    // Click the "Add to Cart" button
    cy.contains('button[title="In den Warenkorb"]', 'In den Warenkorb').first().click();

    // Wait for the add to cart API response and verify it was successful
    cy.wait('@addToCart').its('response.statusCode').should('eq', 200);

    // Verify the confirmation message is displayed
    cy.get('h1').should('contain', 'Der Artikel wurde dem Warenkorb hinzugefügt!');
  });
});
