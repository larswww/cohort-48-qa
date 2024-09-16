import testids from '../testIds'

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("localhost:5174");
  });

  it("should display small if device size is lower than 500", () => {
    cy.viewport(400, 768);
    cy.get(`[data-testId="${testids.deviceSize}"]`).should("have.text", "SMALL");
  });

  it("should change size text when changing viewport sizes", () => {
    cy.viewport(600, 768);
    cy.get(`[data-testId="${testids.deviceSize}"]`).should("have.text", "MEDIUM");
    cy.viewport(900, 768);
    cy.get(`[data-testId="${testids.deviceSize}"]`).should("have.text", "LARGE");
  });
});
