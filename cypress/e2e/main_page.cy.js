describe('Buecher.de main page', () => {
  beforeEach(() => {
    // Set cookies for consent acceptance
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

    // Visit the main page
    cy.visit('https://www.buecher.de/');
  });

  it('should open the main page with cookies already set', () => {
    // Check if the page is loaded
    cy.title().should('include', 'Bücher bestellen bei bücher.de');
  });
});
