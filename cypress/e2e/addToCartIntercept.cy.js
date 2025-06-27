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

  it('should add a book to the cart and validate the API response', function () {
    const book = this.books.derZauberberg;

    // Intercept the POST request for adding the book to the cart
    cy.intercept('POST', `**/cart_add_item/prod_id/${book.productId}/`).as('addToCart');

    // Search for the book and go to its detail page
    mainPage.getSearchInput().type(`${book.title}{enter}`);
    cy.get(`a[data-behavior="productTitle"][href*="${book.productId}"]`)
      .should('contain', book.title)
      .click();

    // Click "Add to Cart" button
    cy.contains('button[data-behavior="buyBtn"]', 'In den Warenkorb').first().click();

    // Wait for and validate the API response
    cy.wait('@addToCart').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      const responseBody = JSON.parse(response.body);

      expect(responseBody).to.have.property('success', true);
      expect(responseBody).to.have.property('cartQuantity', 1);
      expect(responseBody).to.have.property('products').and.to.include(book.productId);
    });

    // Assert that the button text changed and became disabled
    cy.get(`form[data-pid="${book.productId}"] button[data-behavior="buyBtn"]`)
      .should('contain', 'Im Warenkorb')
      .and('be.disabled');
  });
});
