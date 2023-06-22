describe('Check all homepage auctions', () => {
    it('Opens a new sandbox successfully', () => {

        cy.viewport(1440, 900);

        cy.clearCookies();

        // Visit the WordPress site
        cy.visit('https://plugins.yithemes.com/yith-woocommerce-auctions/');

        // Open the demo as User
        //cy.get('.yith-live-switch-user__button--active').click();

        cy.get('#yith-live-switch-user__switcher__toggle').click();
        
        // Accept the cookie banner
        cy.get('.iubenda-cs-accept-btn').click();

        // Exclude product with id 73 from the checked (it is an ended auction on purpose)
        let count = 0;
        cy.get('.products > .product.product-type-auction:not(.post-73)').each(($productElement) => {
            cy.wrap($productElement)
            .find('.yith-wcact-timeleft-loop')
            .should('exist', 'Product auction ended');
            count++;
        }).then(() => {
            cy.log(`******************************\n   Products with a badge: ${count}\n******************************`);
        });

    });
});