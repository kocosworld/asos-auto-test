Feature: Use the website to change how search results are displayed
  So that I can select my yellow t shirts
  As an Australian customer
  I want to be able to reorganize how they are displayed

  Scenario: Display search results in 4 columns
    Given I have searched for 'Yellow T-Shirt' on the Australian store
    And I have some 'Yellow T-Shirt' displayed
    When I organize them in 4 columns
    Then I should see some 'Yellow T-Shirt' organized in 4 columns
