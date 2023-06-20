describe('Create sandbox', () => {
    it('Opens a new sandbox successfully', () => {

        cy.viewport(1440, 900);

        cy.clearCookies();

        // Visit the WordPress site
        cy.visit('https://plugins.yithemes.com/yith-woocommerce-gift-cards/');
        
        // Accept the cookie banner
        cy.get('.iubenda-cs-accept-btn').click();

        // Click the open sandbox banner
        cy.get('a[data-action="ywtenv_create_sandbox"]').click();

        // Set sandbox language to English
        cy.get('.language-switcher-wrapper div[data-lang="en"]').click();
        
        // Check if sandbox is opened
        cy.contains('Your demo ends in:').should('exist');
    });
});