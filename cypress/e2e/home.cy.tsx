/// <reference types="cypress" />

describe("Home page redirection", () => {
  it("should redirect to dashboard page", () => {
    cy.visit("/");
    // Assert the URL is redirected to /dashboard
    cy.url().should("include", "/dashboard");
  });
});
