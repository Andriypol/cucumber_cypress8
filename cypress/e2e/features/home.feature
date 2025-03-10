Feature: Home Page

  Scenario: Verify that the home page loads successfully
    Given Visit the Telnyx homepage
    Then I should see the title of the Home Page is not empty
    Then I should see the header is successfully loaded
    Then I should see the main content is successfully loaded
    Then I should see the footer is successfully loaded

  Scenario: Verify that the home page loads within 3 seconds
    Given Visit the Telnyx homepage
    Then It should load within acceptable time

    
        

 
