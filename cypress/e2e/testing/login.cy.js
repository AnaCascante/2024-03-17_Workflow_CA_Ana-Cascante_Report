
// the user should be able to log in and access their profile

describe("Login and Profile Access", () => {
    it("should log in and access user profile", () => {
        // Visit the login page
        cy.visit('/login');

        // Enter the username and password
        cy.get("#loginEmail").type('your-email');
        cy.get("#password").type('your-password');

        // Submit the login form
        cy.get("form").submit();

        // Assert that the user is logged in
        cy.url().should("include", "/profile");

        // Assert that the user's profile is displayed
        cy.get(".profile").should("be.visible");
    });
});

//the user can not submit the login form with invalid credentials and should see an error message

it("should display error message for invalid login", () => {
    // Visit the login page
    cy.visit("/login");

    // Enter invalid username and password
    cy.get("#loginEmail").type("invalid-email");
    cy.get("#password").type("invalid-password");

    // Submit the login form
    cy.get("form").submit();

    // Assert that the error message is displayed
    cy.get("your Email or password are incorrect").should("be.visible");
});