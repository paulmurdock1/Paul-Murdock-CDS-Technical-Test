import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('I am on the automationpractice login page', () => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");

    })

When('I enter valid credentials', () => {

    var loginData = require('../../fixtures/automationexample');

        cy.get('[id=email]').type(loginData.email);
        cy.get('[id=passwd]').type(loginData.passwd);
        cy.get('[id=SubmitLogin').click();
    })

Then('My Account should be shown', () => {

    var loginData = require('../../fixtures/automationexample');

        cy.title().should('contain', 'My account', { timeout: 10000 })
        cy.get('.account > span').should('contain', loginData.username);
    })