Feature: Display prices in NZ dollars in the Australian Store
  So that I can select my yellow t shirts
  As an Australian customer
  I want to be able to see the prices in NZ dollars

  Scenario: Display prices in NZ dollars in the Australian Store
    Given I have searched for 'Yellow T-Shirt' on the Australian store
    And I have some 'Yellow T-Shirt' displayed
    When I click to change the currency to NZ dollars
    Then I should see the prices in NZ dollars