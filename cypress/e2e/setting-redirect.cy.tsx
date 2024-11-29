/// <reference types="cypress" />

describe("Setting page access for different roles", () => {
  beforeEach(() => cy.visit("/"));

  it("should allow an admin to access /setting", () => {
    // Mock admin role
    cy.intercept("GET", "/apis/mock", { role: "admin" });
    // Visit the settings page
    cy.visit("/setting");
    // Assert the URL remains on /settings
    cy.url().should("eq", `${Cypress.config().baseUrl}/setting`);
  });

  it("should redirect a user to /dashboard when accessing /setting", () => {
    // Mock user role
    cy.intercept("GET", "/apis/mock", { role: "user" });
    // Visit the settings page
    cy.visit("/setting");
    // Assert the user is redirected to /dashboard
    cy.url().should("eq", `${Cypress.config().baseUrl}/dashboard`);
  });
});
