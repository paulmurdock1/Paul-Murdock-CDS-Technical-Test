Feature: Search Feature

As an automationpractice customer
In order to browse items
I want to be able to search for items

Scenario: Search Validation

Given I am a customer of automationpractice
When I enter a search term for which items exist
Then Matching items should be returned