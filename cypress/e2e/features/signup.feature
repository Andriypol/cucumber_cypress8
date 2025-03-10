Feature: Telnyx Sign-Up Functionality

  Background:
    Given I am on the home page
    When I navigate to the sign-up page

  Scenario: Verify that the registration form is displayed
    Then I should see the registration form

  Scenario: Verify that a user can register successfully with valid data
    Given I fill the registration form with valid data
    Then I submit the registration form
    Then I add additional name
    Then I submit the registration form
    Then I should see a successful registration message

  Scenario: Verify that an error message is displayed for invalid password 
    Given I fill the registration form with invalid data
    When I submit the registration form
    Then I should see an error message "That email and password combination is not valid, or your browser could"