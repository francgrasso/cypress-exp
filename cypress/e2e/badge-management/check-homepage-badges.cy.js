describe('Create sandbox', () => {
    it('Check if all products have at least one badge', () => {

        cy.viewport(1440, 900);

        cy.clearCookies();

        // Visit the WordPress site
        cy.visit('https://plugins.yithemes.com/yith-woocommerce-badge-management/');
        
        // Accept the cookie banner
        cy.get('.iubenda-cs-accept-btn').click();

        // Click the open sandbox banner
        cy.get('a[data-action="ywtenv_create_sandbox"]').click();

        // Set sandbox language to English
        cy.get('.language-switcher-wrapper div[data-lang="en"]').click();
        
        // Check if sandbox is opened
        cy.contains('Your demo ends in:').should('exist');

        // Open site frontend
        cy.get('#wp-admin-bar-site-name > a').click();

        let count = 0;
        cy.get('.wc-block-grid__product').each(($productElement) => {
            cy.wrap($productElement)
            .find('.yith-wcbm-badge')
            .should('exist', 'Product badge missing');
            count++;
        }).then(() => {
            cy.log(`******************************\n   Products with a badge: ${count}\n******************************`);
        });
    });
});