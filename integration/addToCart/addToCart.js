import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('An item is displayed', () => {

    cy.visit("http://automationpractice.com/index.php?id_product=1&controller=product");

})

When('I click on Add to cart', () => {

    cy.get('[id=add_to_cart]').click();
})

Then('The item should be added to my cart', () => {

    cy.get('.layer_cart_product > h2').should('exist');
    cy.get('h2 > .ajax_cart_product_txt').should('exist');
    cy.get('.continue > span').should('contain', 'Continue shopping');
    cy.get('.button-medium > span').should('contain', 'Proceed to checkout');
})