Feature: Search Functionality

  Background:
    Given I open the shop for search
    Then I click on search

  Scenario: Verify search functionality returns valid results
    When I search for "Hat"
    Then the search results should be visible
    And the product should be in the results for "Hat"

  Scenario: Verify search functionality returns no results on invalid query
    When I search for "NonExistingProduct"
    Then the search results should not be visible

  Scenario: Verify search functionality returns relevant results on partial search
    When I search for "Telnyx"
    Then the search results should be visible
    And the product should be in the results for "Telnyx"