import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('I am a customer of automationpractice', () => {

    cy.visit("http://automationpractice.com/index.php");
})

When('I enter a search term for which items exist', () => {

    var searchData = require('../../fixtures/searchData');
 
        cy.get('[id=search_query_top]').type(searchData.searchterm_1);
        cy.get('#searchbox > .btn').click();
})

Then('Matching items should be returned', () => {

    var searchData = require('../../fixtures/searchData');

    cy.contains('results have been found', { timeout: 10000 }).should('be.visible');
    cy.get('#best-sellers_block_right').should('exist');
    cy.get('.product-image-container').should('be.visible');
    cy.get('.lighter').should('contain', searchData.searchterm_1);
})