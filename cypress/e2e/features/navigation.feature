Feature: Navigation Menu

  Scenario: Verify that the navigation menu and all its links are displayed
    Given Visit the Menu homepage
    Then I should check the menus are visible and have links with not empty href

  Scenario: Verify that clicking navigation menu links redirects to the correct pages
    Given Visit the Menu homepage
    Then I should navigate to the correct pages when link is clicked
      