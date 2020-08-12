import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('I am a customer of automationpractice', () => {

    cy.visit("http://automationpractice.com/index.php?");

})

When('I click on view cart', () => {

    cy.get('[title="View my shopping cart"]').click();
})

Then('Shopping cart summary should be shown', () => {

    cy.get('#cart_title').should('contain', 'Shopping-cart summary');
    cy.get('.step_current > span').should('exist');
});