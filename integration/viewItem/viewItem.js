import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('A set of items are displayed', () => {

    cy.visit("http://automationpractice.com/index.php");

})

When('I click on an item', () => {

    cy.get('.product_list li:first img').click();
})

Then('The item should be displayed', () => {

    cy.get('.pb-center-column').should('exist');
    cy.get('#our_price_display').should('exist');
    cy.get('.product_attributes').should('exist');
    cy.get('[itemtype="http://schema.org/Product"] > :nth-child(2)').should('exist');

});