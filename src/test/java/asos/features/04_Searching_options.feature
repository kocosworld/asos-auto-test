Feature: Search products by gender or size or colour.
  So that I can select my yellow t shirts
  As an Australian customer
  I want to be able to refine my search by gender or size or colour

  Scenario Outline: Display search results by gender or size or colour
    Given I have searched for 'Yellow T-Shirt' on the Australian store
    And I have some 'Yellow T-Shirt' displayed
    When I refine my search by gender:'<gender>' size:'<size>' and colour:'<colour>'
    Then I should see the expected result:'<expected>'

    Examples:
      | gender | size | colour | expected          |
      | MEN    | S    | GREEN  | MEN-S-GREEN       |
      | MEN    | M    | MULTI  | MEN-M-MULTI       |
      | MEN    | L    | YELLOW | MEN-L-YELLOW      |
      | WOMEN  | AU4  | YELLOW | WOMEN-AU4-YELLOW  |
      | WOMEN  | AU18 | YELLOW | WOMEN-AU18-YELLOW |