$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_Purple_shirt.feature");
formatter.feature({
  "line": 1,
  "name": "Use the website to find shirts",
  "description": "So that I can order a shirt\r\nAs a customer\r\nI want to be able to find t shirts",
  "id": "use-the-website-to-find-shirts",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search for t shirts",
  "description": "",
  "id": "use-the-website-to-find-shirts;search-for-t-shirts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I want to order a shirt",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for \u0027Purple T-Shirt\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see some \u0027Purple T-Shirt\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsDefinition.given_I_want_to_order_a_shirt()"
});
formatter.result({
  "duration": 7590915398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Purple T-Shirt",
      "offset": 14
    }
  ],
  "location": "stepsDefinition.when_I_search_for(String)"
});
formatter.result({
  "duration": 1606317287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Purple T-Shirt",
      "offset": 19
    }
  ],
  "location": "stepsDefinition.then_I_should_see(String)"
});
formatter.result({
  "duration": 3373259880,
  "status": "passed"
});
formatter.uri("02_Australian_shirt.feature");
formatter.feature({
  "line": 1,
  "name": "Use the website to find products in the Australian store",
  "description": "So that I can order a shirt\r\nAs an Australian customer\r\nI want to be able to find t shirts in my store",
  "id": "use-the-website-to-find-products-in-the-australian-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Search for t shirts in Australian store",
  "description": "",
  "id": "use-the-website-to-find-products-in-the-australian-store;search-for-t-shirts-in-australian-store",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I want to order a shirt",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for \u0027Yellow T-Shirt\u0027 in the Australian store",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see some \u0027Yellow T-Shirt\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsDefinition.given_I_want_to_order_a_shirt()"
});
formatter.result({
  "duration": 10020933707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 14
    }
  ],
  "location": "stepsDefinition.when_I_search_in_Australian_store(String)"
});
formatter.result({
  "duration": 3488522990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 19
    }
  ],
  "location": "stepsDefinition.then_I_should_see(String)"
});
formatter.result({
  "duration": 2822569039,
  "status": "passed"
});
formatter.uri("03_Change_results.feature");
formatter.feature({
  "line": 1,
  "name": "Use the website to change how search results are displayed",
  "description": "So that I can select my yellow t shirts\r\nAs an Australian customer\r\nI want to be able to reorganize how they are displayed",
  "id": "use-the-website-to-change-how-search-results-are-displayed",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Display search results in 4 columns",
  "description": "",
  "id": "use-the-website-to-change-how-search-results-are-displayed;display-search-results-in-4-columns",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have some \u0027Yellow T-Shirt\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I organize them in 4 columns",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see some \u0027Yellow T-Shirt\u0027 organized in 4 columns",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 8687593152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 13
    }
  ],
  "location": "stepsDefinition.I_have_some_results_displayed(String)"
});
formatter.result({
  "duration": 2087125839,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinition.when_I_organize_in_4_columns()"
});
formatter.result({
  "duration": 84160559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 19
    }
  ],
  "location": "stepsDefinition.then_I_should_see_in_4_columns(String)"
});
formatter.result({
  "duration": 3441516797,
  "status": "passed"
});
formatter.uri("04_Searching_options.feature");
formatter.feature({
  "line": 1,
  "name": "Search products by gender or size or colour.",
  "description": "So that I can select my yellow t shirts\r\nAs an Australian customer\r\nI want to be able to refine my search by gender or size or colour",
  "id": "search-products-by-gender-or-size-or-colour.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Display search results by gender or size or colour",
  "description": "",
  "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have some \u0027Yellow T-Shirt\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I refine my search by gender:\u0027\u003cgender\u003e\u0027 size:\u0027\u003csize\u003e\u0027 and colour:\u0027\u003ccolour\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the expected result:\u0027\u003cexpected\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;",
  "rows": [
    {
      "cells": [
        "gender",
        "size",
        "colour",
        "expected"
      ],
      "line": 13,
      "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;1"
    },
    {
      "cells": [
        "MEN",
        "S",
        "GREEN",
        "MEN-S-GREEN"
      ],
      "line": 14,
      "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;2"
    },
    {
      "cells": [
        "MEN",
        "M",
        "MULTI",
        "MEN-M-MULTI"
      ],
      "line": 15,
      "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;3"
    },
    {
      "cells": [
        "MEN",
        "L",
        "YELLOW",
        "MEN-L-YELLOW"
      ],
      "line": 16,
      "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;4"
    },
    {
      "cells": [
        "WOMEN",
        "AU4",
        "YELLOW",
        "WOMEN-AU4-YELLOW"
      ],
      "line": 17,
      "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;5"
    },
    {
      "cells": [
        "WOMEN",
        "AU18",
        "YELLOW",
        "WOMEN-AU18-YELLOW"
      ],
      "line": 18,
      "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Display search results by gender or size or colour",
  "description": "",
  "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have some \u0027Yellow T-Shirt\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I refine my search by gender:\u0027MEN\u0027 size:\u0027S\u0027 and colour:\u0027GREEN\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the expected result:\u0027MEN-S-GREEN\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 8789539685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 13
    }
  ],
  "location": "stepsDefinition.I_have_some_results_displayed(String)"
});
formatter.result({
  "duration": 2847685155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MEN",
      "offset": 30
    },
    {
      "val": "S",
      "offset": 41
    },
    {
      "val": "GREEN",
      "offset": 56
    }
  ],
  "location": "stepsDefinition.when_I_refine_search_by(String,String,String)"
});
formatter.result({
  "duration": 9407288558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MEN-S-GREEN",
      "offset": 34
    }
  ],
  "location": "stepsDefinition.then_I_should_see_the_expected_result(String)"
});
formatter.result({
  "duration": 1328437829,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Display search results by gender or size or colour",
  "description": "",
  "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have some \u0027Yellow T-Shirt\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I refine my search by gender:\u0027MEN\u0027 size:\u0027M\u0027 and colour:\u0027MULTI\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the expected result:\u0027MEN-M-MULTI\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 8869565729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 13
    }
  ],
  "location": "stepsDefinition.I_have_some_results_displayed(String)"
});
formatter.result({
  "duration": 2569834966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MEN",
      "offset": 30
    },
    {
      "val": "M",
      "offset": 41
    },
    {
      "val": "MULTI",
      "offset": 56
    }
  ],
  "location": "stepsDefinition.when_I_refine_search_by(String,String,String)"
});
formatter.result({
  "duration": 9309370487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MEN-M-MULTI",
      "offset": 34
    }
  ],
  "location": "stepsDefinition.then_I_should_see_the_expected_result(String)"
});
formatter.result({
  "duration": 1305721001,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Display search results by gender or size or colour",
  "description": "",
  "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have some \u0027Yellow T-Shirt\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I refine my search by gender:\u0027MEN\u0027 size:\u0027L\u0027 and colour:\u0027YELLOW\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the expected result:\u0027MEN-L-YELLOW\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 8116430824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 13
    }
  ],
  "location": "stepsDefinition.I_have_some_results_displayed(String)"
});
formatter.result({
  "duration": 2627573333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MEN",
      "offset": 30
    },
    {
      "val": "L",
      "offset": 41
    },
    {
      "val": "YELLOW",
      "offset": 56
    }
  ],
  "location": "stepsDefinition.when_I_refine_search_by(String,String,String)"
});
formatter.result({
  "duration": 9241380791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MEN-L-YELLOW",
      "offset": 34
    }
  ],
  "location": "stepsDefinition.then_I_should_see_the_expected_result(String)"
});
formatter.result({
  "duration": 1674517567,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Display search results by gender or size or colour",
  "description": "",
  "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have some \u0027Yellow T-Shirt\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I refine my search by gender:\u0027WOMEN\u0027 size:\u0027AU4\u0027 and colour:\u0027YELLOW\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the expected result:\u0027WOMEN-AU4-YELLOW\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 8305187699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 13
    }
  ],
  "location": "stepsDefinition.I_have_some_results_displayed(String)"
});
formatter.result({
  "duration": 3962337420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 30
    },
    {
      "val": "AU4",
      "offset": 43
    },
    {
      "val": "YELLOW",
      "offset": 60
    }
  ],
  "location": "stepsDefinition.when_I_refine_search_by(String,String,String)"
});
formatter.result({
  "duration": 9314411956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN-AU4-YELLOW",
      "offset": 34
    }
  ],
  "location": "stepsDefinition.then_I_should_see_the_expected_result(String)"
});
formatter.result({
  "duration": 1302439086,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Display search results by gender or size or colour",
  "description": "",
  "id": "search-products-by-gender-or-size-or-colour.;display-search-results-by-gender-or-size-or-colour;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have some \u0027Yellow T-Shirt\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I refine my search by gender:\u0027WOMEN\u0027 size:\u0027AU18\u0027 and colour:\u0027YELLOW\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the expected result:\u0027WOMEN-AU18-YELLOW\u0027",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 8047994493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 13
    }
  ],
  "location": "stepsDefinition.I_have_some_results_displayed(String)"
});
formatter.result({
  "duration": 1994625550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 30
    },
    {
      "val": "AU18",
      "offset": 43
    },
    {
      "val": "YELLOW",
      "offset": 61
    }
  ],
  "location": "stepsDefinition.when_I_refine_search_by(String,String,String)"
});
formatter.result({
  "duration": 9254422546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN-AU18-YELLOW",
      "offset": 34
    }
  ],
  "location": "stepsDefinition.then_I_should_see_the_expected_result(String)"
});
formatter.result({
  "duration": 1310035309,
  "status": "passed"
});
formatter.uri("05_prices_NZ_dollars.feature");
formatter.feature({
  "line": 1,
  "name": "Display prices in NZ dollars in the Australian Store",
  "description": "So that I can select my yellow t shirts\r\nAs an Australian customer\r\nI want to be able to see the prices in NZ dollars",
  "id": "display-prices-in-nz-dollars-in-the-australian-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Display prices in NZ dollars in the Australian Store",
  "description": "",
  "id": "display-prices-in-nz-dollars-in-the-australian-store;display-prices-in-nz-dollars-in-the-australian-store",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have some \u0027Yellow T-Shirt\u0027 displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to change the currency to NZ dollars",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the prices in NZ dollars",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 7279831730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 13
    }
  ],
  "location": "stepsDefinition.I_have_some_results_displayed(String)"
});
formatter.result({
  "duration": 2419567421,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinition.when_I_change_to_nz_dollars()"
});
formatter.result({
  "duration": 1106365752,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinition.then_I_see_nz_dollars_prices()"
});
formatter.result({
  "duration": 3540283285,
  "status": "passed"
});
formatter.uri("06_Save_item.feature");
formatter.feature({
  "line": 1,
  "name": "Save an item for later.",
  "description": "So that I can select my yellow t shirts\r\nAs an Australian customer\r\nI want to be able to refine my search by gender or size or colour",
  "id": "save-an-item-for-later.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Save an item for later",
  "description": "",
  "id": "save-an-item-for-later.;save-an-item-for-later",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I save an item for later",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the item is saved",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 8104867718,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinition.when_I_save_item_for_later()"
});
formatter.result({
  "duration": 5020841340,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinition.then_item_is_saved()"
});
formatter.result({
  "duration": 4472489729,
  "status": "passed"
});
formatter.uri("07_Add_item_to_bag.feature");
formatter.feature({
  "line": 1,
  "name": "Add item to the bag.",
  "description": "So that I can select my yellow t shirts\r\nAs an Australian customer\r\nI want to be able to add an item to the bag",
  "id": "add-item-to-the-bag.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Add an item to the bag",
  "description": "",
  "id": "add-item-to-the-bag.;add-an-item-to-the-bag",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have searched for \u0027Yellow T-Shirt\u0027 on the Australian store",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add an item to the bag",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the item is added to the bag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow T-Shirt",
      "offset": 21
    }
  ],
  "location": "stepsDefinition.given_I_have_searched_for_on_Australian_store(String)"
});
formatter.result({
  "duration": 10257243001,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinition.when_I_add_item_to_bag()"
});
formatter.result({
  "duration": 3765785522,
  "status": "passed"
});
formatter.match({
  "location": "stepsDefinition.then_item_is_added_to_bag()"
});
formatter.result({
  "duration": 6750867898,
  "status": "passed"
});
});