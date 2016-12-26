Feature: Add item to the bag.
  So that I can select my yellow t shirts
  As an Australian customer
  I want to be able to add an item to the bag

  Scenario: Add an item to the bag
    Given I have searched for 'Yellow T-Shirt' on the Australian store
    When I add an item to the bag
    Then the item is added to the bag