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

    getFooterOrdersLink() {
        return cy.contains('a[href*="/my_orders"]', 'Meine Bestellungen');
    }
    
    getFooterGutscheinLink() {
        return cy.contains('a[href*="/answers/id/05/"]', 'Gutschein einlösen');
    }
    
    getFooterRuecksendungLink() {
        return cy.contains('a', 'Rücksendung');
    }

    getFooterWiderrufLink() {
        return cy.contains('a','Widerruf');
    }

    getFooterRechnungLink() {
        return cy.contains('a','Rechnung');
    }

    getFooterPaypalLink() {
        return cy.contains('a','PayPal');
    }

    getFooterKreditkarteLink() {
        return cy.contains('a','Kreditkarte');
    }

    getFooterOtherPaymentMethodsLink() {
        return cy.contains('a','Weitere Zahlungsarten');
    }
    getFooterKontaktLink() {
        return cy.contains('a','Kontakt');
    }
    getFooterLieferungLink() {
        return cy.contains('a','Lieferung & Versand');
    }
    getFooterDatenschutzLink() {
        return cy.contains('a','Datenschutz');
    }
    
    getFooterFaqLink() {
        return cy.contains('a','FAQ');
    }
    getFooterImpressumLink() {
        return cy.contains('a','Impressum');
    }
    getFooterAgbLink() {
        return cy.contains('a','AGB');
    }
    
    getFooterPartnerprogrammLink() {
        return cy.contains('a','Partnerprogramm');
    }
    
    getFooterPressemitteilungenLink() {
        return cy.contains('a','Pressemitteilungen');
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
  