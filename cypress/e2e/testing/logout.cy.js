describe('User can log out with logout button', () => {
    it('should log out successfully', () => {
        // Visit the page
        cy.visit("/");
        cy.wait(1000);

        // Click on the login button, enter credentials and submit
        cy.get("#registerModal").contains("Login").click();
        cy.get("#loginForm").should("be.visible");
        cy.wait(1000);
        cy.get("#loginEmail").type(email);
        cy.get("#loginPassword").type(password);
        cy.get("button[type=submit]").contains("Login").click();

        // Wait for the login to complete
        cy.wait(1000);

        // Check storage for token
        cy.window().then((window) => {
            const token = window.localStorage.getItem("token");
            expect(token).to.exist;
        });
        
        // Click on the logout button
        cy.get("button[data-auth=logout]").contains("Logout").click();
        cy.wait(1000);
        cy.getAllLocalStorage().should("be.empty");
});
});