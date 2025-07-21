import { mainPage } from "../support/pages/mainPage";
import { generateUserData } from "../support/helpers/generateUser";

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

    // Step 3: Generate test data
    const user = generateUserData();

    // Step 4: Fill registration form
    cy.get('input[name="form[title]"]').type(user.title);
    cy.get('input[name="form[first_name]"]').type(user.firstName);
    cy.get('input[name="form[last_name]"]').type(user.lastName);
    cy.get('input[name="form[street]"]').type(user.street);
    cy.get('input[name="form[street_number]"]').type(user.streetNumber);
    cy.get('input[name="form[zip]"]').type(user.zip);
    cy.get('input[name="form[city]"]').invoke('val', user.city).trigger('input');
    cy.get('input[name="form[birthdate]"]').type(user.birthdate);
    cy.get('input[name="form[email]"]').type(user.email);
    cy.get('input[name="form[password]"]').type(user.password);

    // Step 5: Submit form
    cy.get('input[type="submit"][value="Weiter"]').click();

    // Step 6: Validate intercepted request
    cy.wait('@registration').then(({ request, response }) => {
      expect(response.statusCode).to.eq(302);

      const params = new URLSearchParams(request.body);

      expect(params.get('form[email]')).to.eq(user.email);
      expect(params.get('form[first_name]')).to.eq(user.firstName);
      expect(params.get('form[last_name]')).to.eq(user.lastName);
      expect(params.get('form[city]')).to.eq(user.city);
      expect(params.get('form[password]')).to.eq(user.password);
    });

    // Step 7: Verify user is now logged in
    cy.get('h5.h5--section')
      .should('be.visible')
      .and('contain.text', 'Herzlich willkommen');
  });
});
