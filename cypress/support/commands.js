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
      "google_services_session": true,
      "klaro": true,
      "buecher_statistics": true,
      "google_services_statistics": true,
      "buecher_personalization": true,
      "buecher_advertising": true,
      "adtraction": true,
      "awin": true,
      "billiger": true,
      "bing": true,
      "connexity": true,
      "taboola": true,
      "criteo": true,
      "facebook": true,
      "getback": true,
      "google_ads": true,
      "google_analytics": true,
      "gtm": true,
      "gumgum": true,
      "outbrain": true,
      "rtb_house": true,
      "salenti": true,
      "sovendus": true,
      "tradedoubler": true,
      "xandr": true,
      "necessary": true,
      "functional": true,
      "personalization": true,
      "marketing": true
    }));
  });