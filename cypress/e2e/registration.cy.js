import { mainPage } from "../support/pages/mainPage";
import { registrationPage } from "../support/pages/registrationPage";
import { generateUserData } from "../support/helpers/generateUser";

describe('User Registration', () => {
  beforeEach(() => {
    // Set cookies to bypass consent dialogs
    cy.setConsentCookies();

    // Visit the main page
    mainPage.visit();

    // Navigate to registration form
    mainPage.getRegistrationLink().click();
    cy.url().should('include', '/my_login');
    cy.get('div[data-tab-for="register"]').click();
    cy.contains('Jetzt registrieren!').click();
  });

  // Positive test cases
  describe('Positive Scenarios', () => {
    it('should register a user and verify the registration request', () => {
      // Intercept the registration POST request
      cy.intercept('POST', '**/my_new_billing/change_address/**/shop_order_register/').as('registration');

      // Generate valid test user data
      const user = generateUserData();

      // Fill in the form and submit
      registrationPage.fillForm(user);
      registrationPage.submit();

      // Assert the backend registration request and check submitted data
      cy.wait('@registration').then(({ request, response }) => {
        expect(response.statusCode).to.eq(302);

        const params = new URLSearchParams(request.body);
        expect(params.get('form[email]')).to.eq(user.email);
        expect(params.get('form[first_name]')).to.eq(user.firstName);
        expect(params.get('form[last_name]')).to.eq(user.lastName);
        expect(params.get('form[city]')).to.eq(user.city);
        expect(params.get('form[password]')).to.eq(user.password);
      });

      // Assert successful registration message on UI
      cy.get('h5.h5--section')
        .should('be.visible')
        .and('contain.text', 'Herzlich willkommen');
    });
  });

  // Negative test cases
  describe('Negative Scenarios', () => {
    it('should show errors for all missing required fields', () => {
      // Submit form without any data
      registrationPage.submit();

      // Assert all validation messages appear
      const errorMessages = [
        'Bitte geben Sie Ihren Vornamen an.',
        'Bitte geben Sie Ihren Nachnamen an.',
        'Bitte geben Sie Ihre Straße an.',
        'Bitte geben Sie Ihre Hausnummer an.',
        'Bitte geben Sie Ihre Postleitzahl an.',
        'Bitte geben Sie Ihren Wohnort an.',
        'Bitte geben Sie eine gültige E-Mail Adresse an.',
        'Bitte geben Sie ein Passwort an.'
      ];

      errorMessages.forEach((msg) => {
        cy.contains(msg).should('be.visible');
      });
    });

    it('should not submit the form with invalid email format and stay on same page', () => {
      // Generate user with invalid email
      const user = generateUserData({ email: 'invalid-email' });

      registrationPage.fillForm(user);

      // Intercept registration request
      cy.intercept('POST', '**/shop_order_register/**').as('registration');

      registrationPage.submit();

      // Ensure form was not submitted and we stayed on the same page
      cy.url().should('include', '/go/my_my/my_new_billing/');

      // Confirm no registration request was made
      cy.wait(1000);
      cy.get('@registration.all').should('have.length', 0);
    });

    it('should show error for weak password', () => {
      // Generate user with short password
      const user = generateUserData({ password: '123' });

      registrationPage.fillForm(user);
      registrationPage.submit();

      // Assert validation message for weak password
      cy.contains('Ihr Passwort muss zwischen 6 und 50 Zeichen lang sein').should('be.visible');
    });
  });
});
