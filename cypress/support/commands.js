// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';

// Set cookies for consent acceptance
Cypress.Commands.add('setConsentCookies', () => {
    cy.setCookie('klaro', JSON.stringify({
      "buecher_session": true,
      "google_services_session": false,
      "klaro": true,
      "buecher_statistics": false,
      "google_services_statistics": false,
      "buecher_personalization": false,
      "buecher_advertising": false,
      "adtraction": false,
      "awin": false,
      "billiger": false,
      "bing": false,
      "connexity": false,
      "taboola": false,
      "criteo": false,
      "facebook": false,
      "getback": false,
      "google_ads": false,
      "google_analytics": false,
      "gumgum": false,
      "outbrain": false,
      "rtb_house": false,
      "tradedoubler": false,
      "xandr": false,
      "necessary": false,
      "functional": false,
      "personalization": false,
      "marketing": false
    }));
  });