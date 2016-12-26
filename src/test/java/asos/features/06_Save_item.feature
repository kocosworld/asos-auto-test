Feature: Save an item for later.
  So that I can select my yellow t shirts
  As an Australian customer
  I want to be able to refine my search by gender or size or colour

  Scenario: Save an item for later
    Given I have searched for 'Yellow T-Shirt' on the Australian store
    When I save an item for later
    Then the item is saved