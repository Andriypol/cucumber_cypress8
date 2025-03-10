Feature: Telnyx Shop Functionality

  Background:
    Given I open the shop

  Scenario: Verify that the product details page displays correct product information
    When I go to the first product
    Then the product title should include "Telnyx Classic Hat"
    And the product price should not be empty
    And the product description should not be empty

  Scenario: Verify that a product can be added to the cart successfully
    When I go to the first product
    And I set the quantity to 3
    And I add the product to the cart
    Then the cart item count should be "3"

  Scenario: Verify shopping cart displays added products and allows quantity updates
    When I go to the first product
    And I set the quantity to 4
    And I add the product to the cart
    Then the cart item title should include "Telnyx Classic Hat"
    And the cart item quantity should be "4"
    When I set the inner quantity to 2
    Then the updated cart item quantity should be "2"

  Scenario: Verify shopping cart icon is updated while adding some quantity of products
    When I go to the first product
    And I set the quantity to 3
    And I add the product to the cart
    Then the cart item quantity should be equal to the icon cart number
