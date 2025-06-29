export class MainPage {

    visit() {
      cy.visit('/');
    }
  
    getTitle() {
        return cy.title();
    }
    getLogo() {
        return cy.get('img[alt="bücher.de"]').should('be.visible');
    }
    getSearchInput() {
        return cy.get('#qusearchfield');
    }
    getRegistrationLink() {
        return cy.get('a[alt="Mein Kundenkonto"]');
    }
    getWishlistIcon() {
        return cy.get('a[data-tooltip="Meine Merkliste"]');
    }
    getPaybackIcon() {
    return cy.get('img[alt^="PAYBACK Logo"]');
    }
    getShoppingBasket() {
    return cy.get('a[data-behavior="cartCount"]').contains('Warenkorb');
    }
   
    getNewsletterButton() {
    return cy.get('button[title="Zum Newsletter eintragen"]');
    }

    getNewsletterInput() {
        return cy.get('input[placeholder="Deine E-Mail-Adresse"]');
    }

    getFooterAccountLink() {
        return cy.get('a.link.d-block').contains('Mein Konto');
    }
    
    getFooterGutscheinLink() {
        return cy.get('a.link.d-block').contains('Gutschein einlösen');
    }
    
    getFooterLieferungLink() {
        return cy.get('a.link.d-block').contains('Lieferung & Versand');
    }
    
    getFooterRuecksendungLink() {
        return cy.get('a.link.d-block').contains('Rücksendung');
    }
    
    getFooterWiderrufLink() {
        return cy.get('a.link.d-block').contains('Widerruf');
    }
    
    getFooterRechnungLink() {
        return cy.get('a.link.d-block').contains('Rechnung');
    }
    
    getFooterPaypalLink() {
        return cy.get('a.link.d-block').contains('PayPal');
    }
    
    getFooterKreditkarteLink() {
        return cy.get('a.link.d-block').contains('Kreditkarte');
    }

    getFooterKontaktLink() {
        return cy.get('a.link.d-block').contains('Kontakt');
    }
    
    getFooterGeschenkgutscheineLink() {
        return cy.get('a.link.d-block').contains('Geschenkgutscheine');
    }
    
    getFooterDatenschutzLink() {
        return cy.get('a.link.d-block').contains('Datenschutz');
    }
    
    getFooterFaqLink() {
        return cy.get('a.link.d-block').contains('FAQ');
    }
    
    getFooterAgbLink() {
        return cy.get('a.link.d-block').contains('AGB');
    }
    
    getFooterUeberUnsLink() {
        return cy.get('a.link.d-block').contains('Über uns');
    }
    
    getFooterImpressumLink() {
        return cy.get('a.link.d-block').contains('Impressum');
    }
    
    getFooterPartnerprogrammLink() {
        return cy.get('a.link.d-block').contains('Partnerprogramm');
    }
    
    getFooterPressemitteilungenLink() {
        return cy.get('a.link.d-block').contains('Pressemitteilungen');
    }

    getInstagramIcon() {
        return cy.get('a[data-tooltip="Folge uns auf Instagram"]');
    }

    getFacebookIcon() {
        return cy.get('a[data-tooltip="Folge uns auf Facebook"]');
    }
    
    getYouTubeIcon() {
        return cy.get('a[data-tooltip="Folge uns auf YouTube"]');
    }
    getTikTokIcon() {
        return cy.get('a[data-tooltip="Folge uns auf TikTok"]');
    }
    getRechnungIcon() {
        return cy.get('a[data-tooltip="Bezahlung auf Rechnung"]');
    }
    getPayPalIcon() {
        return cy.get('a[data-tooltip="Bezahlung mit PayPal"]');
    }
    getKreditkarteIcon() {
        return cy.get('a[data-tooltip="Bezahlung mit Kreditkarte"]');
    }
    getPaybackServiceIcon() {
        return cy.get('img[alt="Payback-Logo mit lachendem Pointee"]');
    }

  }
  
  export const mainPage = new MainPage();
  