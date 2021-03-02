Feature: End to End Ecommerce Validation

    application regression
    @Regression
    Scenario: Ecommerce Product Delivery
    Given I open ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify message

    @Smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
    |name | gender|
    |bobz | Male  |
    Then validate the forms behavior
    And select the shop page

