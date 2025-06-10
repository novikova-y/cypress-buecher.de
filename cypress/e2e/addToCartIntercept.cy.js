import { mainPage } from "../support/pages/mainPage";

describe('Add book to cart API test', () => {
  const bookTitle = "All the King's Men";
  const productId = "22922676";

  beforeEach(() => {
    cy.setConsentCookies();
    mainPage.visit();
  });

  it('should add a book to the cart and confirm the POST request', () => {
    // Intercept the POST request for adding the book to the cart
    cy.intercept('POST', `/go/ajax_ajaxssl/cart_add_item/prod_id/${productId}/`).as('addToCart');

    // Search for the book and navigate to its page
    mainPage.getSearchInput().type(`${bookTitle}{enter}`);
    cy.get(`a[data-pid="${productId}"]`).click();

    // Click the "Add to Cart" button
    cy.contains('button[title="In den Warenkorb"]', 'In den Warenkorb').first().click();

    // Wait for the add to cart API response and verify it was successful
    cy.wait('@addToCart').its('response.statusCode').should('eq', 200);

    // Verify the confirmation message is displayed
    cy.get('h1').should('contain', 'Der Artikel wurde dem Warenkorb hinzugefügt!');
  });
});
