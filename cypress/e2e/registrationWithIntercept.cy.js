import { mainPage } from "../support/pages/mainPage";

describe('User registration with intercept', () => {
  beforeEach(() => {
    cy.setConsentCookies();
    mainPage.visit();
  });

  it('should register a user and verify the registration request', () => {
    // Step 1: Navigate to registration
    mainPage.getRegistrationLink().click();
    cy.url().should('include', '/my_login');
    cy.get('div[data-tab-for="register"]').click();
    cy.contains('Jetzt registrieren!').click();

    // Step 2: Intercept registration POST request
    cy.intercept('POST', '**/my_new_billing/change_address/**/shop_order_register/').as('registration');

    // Step 3: Fill registration form
    const email = `test${Date.now()}@example.com`;
    const password = 'Qwerty123';

    cy.get('input[name="form[title]"]').type('Test');
    cy.get('input[name="form[first_name]"]').type('Test');
    cy.get('input[name="form[last_name]"]').type('Test');
    cy.get('input[name="form[street]"]').type('Test Straße');
    cy.get('input[name="form[street_number]"]').type('1');
    cy.get('input[name="form[zip]"]').type('10439');
    cy.get('input[name="form[city]"]').invoke('val', 'Berlin').trigger('input');
    cy.get('input[name="form[birthdate]"]').type('1990-12-12');
    cy.get('input[name="form[email]"]').type(email);
    cy.get('input[name="form[password]"]').type(password);

    // Step 4: Submit form
    cy.get('input[type="submit"][value="Weiter"]').click();

    // Step 5: Validate intercepted request
    cy.wait('@registration').then(({ request, response }) => {
      expect(response.statusCode).to.eq(302);

      const params = new URLSearchParams(request.body);

      expect(params.get('form[email]')).to.eq(email);
      expect(params.get('form[first_name]')).to.eq('Test');
      expect(params.get('form[last_name]')).to.eq('Test');
      expect(params.get('form[city]')).to.eq('Berlin');
      expect(params.get('form[password]')).to.eq('Qwerty123');
    });

    // Step 6: Verify user is now logged in
    cy.get('h5.h5--section')
      .should('be.visible')
      .and('contain.text', 'Herzlich willkommen');
  });
});
