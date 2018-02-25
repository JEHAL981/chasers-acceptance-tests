# This feature file test two different login scenarios
@chasers
Feature: chasers member login

  As a chasers member
  I would like to be able to login
  So that I can view membership details

  Background:
    Given I am on the claphamchasers Sign In page

  @complete
  Scenario: Login with valid credentials
    Given I am authorised chaser member signed in
    Then  I should be directed to the chasers members section