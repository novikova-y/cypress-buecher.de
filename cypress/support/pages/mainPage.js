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
        return cy.get('a[data-gat="header;genericNavi;Anmelden"]');
    }
    getWishlistIcon() {
        return cy.get('a[data-gat="header;genericNavi;Merkliste"]');
    }
    getPaybackIcon() {
        return cy.get('img.logo-payback');
    }
    getShoppingBasket() {
        return cy.get('a[data-gat="header;Warenkorb"]:visible').first();
      }
    getBuchSection() {
        return cy.get('a[data-gat="primaryNavi;Buch"]');
    }
    getEBookSection() {
        return cy.get('a[data-gat="primaryNavi;eBook"]');
    }
    getTolinoSection() {
        return cy.get('a[data-gat="primaryNavi;tolino"]');
    }
    getHörbuchSection() {
        return cy.get('a[data-gat="primaryNavi;Hörbuch"]');
    }
    getKinderbuchSection() {
        return cy.get('a[data-gat="primaryNavi;Kinderbuch"]');
    }
    getJugendbuchSection() {
        return cy.get('a[data-gat="primaryNavi;Jugendbuch"]');
    }
    getRatgeberSection() {
        return cy.get('a[data-gat="primaryNavi;Ratgeber"]');
    }
    getSchuleSection() {
        return cy.get('a[data-gat="primaryNavi;Schule"]');
    }
    getKalenderSection() {
        return cy.get('a[data-gat="primaryNavi;Kalender"]');
    }
    getEnglischeBuecherSection() {
        return cy.get('a[data-gat="primaryNavi;Englische Bücher"]');
    }
    getSaleSection() {
        return cy.get('a[data-gat="primaryNavi;SALE"]');
    }
    getSpielzeugSection() {
        return cy.get('a[data-gat="primaryNavi;Spielzeug"]');
    }
    getMusikSection() {
        return cy.get('a[data-gat="primaryNavi;Musik"]');
    }
    getFilmSection() {
        return cy.get('a[data-gat="primaryNavi;Film"]');
    }
    getGamesSection() {
        return cy.get('a[data-gat="primaryNavi;Games"]');
    }
    getFanartikelSection() {
        return cy.get('a[data-gat="primaryNavi;Fanartikel"]');
    }
    getTechnikSection() {
        return cy.get('a[data-gat="primaryNavi;Technik"]');
    }
    getWohnenSection() {
        return cy.get('a[data-gat="primaryNavi;Wohnen & Leben"]');
    }
    getSchreibwarenSection() {
        return cy.get('a[data-gat="primaryNavi;Schreibwaren"]');
    }
    getBuchreihenSection() {
        return cy.get('a[data-gat="primaryNavi;Buchreihen"]');
    }
    getMagazinSection() {
        return cy.get('a[data-gat="primaryNavi;Magazin"]');
    }
    getServicePortalButton() {
        return cy.get('#chatbot-start-icon');
    }
    getNewsletterButton() {
        return cy.get('a[title="Jetzt kostenlosen Newsletter abonnieren"]');
    }
    getBannerSlider() {
        return cy.get('ul.plain.slides.top-banners');
    }
    getSidebarBestsellerSection() {
        return cy.contains('a.without-icon', 'Bestseller');
    }
    
    getSidebarNeuheitenSection() {
        return cy.contains('a.without-icon', 'Neuheiten');
    }
    
    getSidebarVorschauSection() {
        return cy.contains('a.without-icon', 'Vorschau');
    }
    
    getSidebarPreishitsSection() {
        return cy.contains('a.without-icon', 'Preishits');
    }
    
    getSidebarGeschenkgutscheineSection() {
        return cy.contains('a.without-icon', 'Geschenkgutscheine');
    }

    getSidebarBuchreihenSection() {
        return cy.contains('a', 'Buchreihen');
    }

    getSidebarKochbuchshopSection() {
        return cy.contains('a', 'Kochbuchshop');
    }
      
    getSidebarGregShopSection() {
        return cy.contains('a', 'Greg-Shop');
    }
      
    getSidebarReisefuehrerSection() {
        return cy.contains('a', 'Reiseführer');
    }
      
    getSidebarStarWarsShopSection() {
        return cy.contains('a', 'Star Wars-Shop');
    }
      
    getSidebarNintendoShopSection() {
        return cy.contains('a', 'Nintendo-Shop');
    }
      
    getSidebarStabiloShopSection() {
        return cy.contains('a', 'STABILO-Shop');
    }
      
    getSidebarBravoHitsSection() {
        return cy.contains('a', 'Bravo Hits');
    }
      
    getSidebarLegoshopSection() {
        return cy.contains('a', 'LEGO® Shop');
    }
      
    getSidebarGUShopSection() {
        return cy.contains('a', 'GU-Shop');
    }
    getBestsellerBooksBlock() {
        return cy.get('a.headline-link').contains('Bestseller - Bücher');
    }

    getBestsellerMoviesBlock() {
        return cy.get('a.headline-link').contains('Bestseller - Filme');
    }
    
    getBestsellerMusicBlock() {
        return cy.get('a.headline-link').contains('Bestseller - Musik');
    }
    
    getBestsellerToysBlock() {
        return cy.get('a.headline-link').contains('Bestseller - Spielwaren');
    }
    
    getBestsellerGamesBlock() {
        return cy.get('a.headline-link').contains('Bestseller - Games');
    }
    
    getBestsellerStationeryBlock() {
        return cy.get('a.headline-link').contains('Bestseller - Schreibwaren');
    }
    getNewsletterInput() {
        return cy.get('#form_email_benefit');
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
    getFacebookIcon() {
        return cy.get('a[aria-label="facebook"]');
    }
    
    getInstagramIcon() {
        return cy.get('img[alt="instagram"]');
    }
    getYouTubeIcon() {
        return cy.get('a[aria-label="youtube"]');
    }
    getRechnungIcon() {
        return cy.get('a[aria-label="Rechnung"]');
    }

    getPayPalIcon() {
        return cy.get('a[aria-label="PayPal"]');
    }
    
    getKreditkarteIcon() {
        return cy.get('a[aria-label="Kreditkarte"]');
    }
    getPaybackServiceIcon() {
        return cy.get('a[aria-label="Payback"]');
    }
    
    getDeutschePostDHLIcon() {
    return cy.get('img[alt="Deutsche Post DHL"]');
    }

  }
  
  export const mainPage = new MainPage();
  