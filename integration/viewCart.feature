Feature: addToCart Feature

As an automationpractice customer
In order to purchase an item
I want to be able to view my cart

Scenario: View cart Validation

Given I am a customer of automationpractice
When I click on view cart
Then Shopping cart summary should be shown