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
   Given an unauthenticated user
   When the user tries to access a restricted asset
   Then they should be directed to a login page
   When the user submits valid credentials
   Then they should be redirected back to the restricted content
