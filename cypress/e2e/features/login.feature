Feature: Telnyx Log In Functionality

  @skip
  Scenario: Verify that the login form is displayed
    Given the user is on the home page
    When the user navigates to the login page
    Then the login form should be visible
 
  Scenario: Verify that a user can log in successfully with valid credentials
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the user should be logged in successfully

  Scenario: Verify that an error message is displayed for invalid login credentials
    Given the user is on the login page
    Given the user has invalid login data
    When the user logs in with invalid credentials
    Then an error message for invalid credentials should be displayed

  Scenario: Verify that an error message is displayed when submitting a blank form
    Given the user is on the login page
    When the user submits the login form without entering any data
    Then error messages for blank form fields should be displayed