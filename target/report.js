$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/A_Config_Setup.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: karthick@kripya.com"
    }
  ],
  "line": 3,
  "name": "Configuration and Setup",
  "description": "",
  "id": "configuration-and-setup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "style type and material type",
  "description": "",
  "id": "configuration-and-setup;style-type-and-material-type",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launches centric application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Click on setup icon",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User creates style type \"\u003cStyleTypeA\u003e\",\"\u003cStyleTypeB\u003e\",\"\u003cStyleTypeC\u003e\",\"\u003cStyleTypeD\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User fill the style type attributes fields",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User creates material type \"\u003cStandalone\u003e\",\"\u003cStructurecomponent\u003e\",\"\u003cTool\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User creates BOM type \"\u003cStyleBOM\u003e\",\"\u003cMaterialBOM\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User creates size chart type \"\u003cAll\u003e\",\"\u003cList\u003e\",\"\u003cValues\u003e\",\"\u003cTolerance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User creates spec type \"\u003cSpecTypeA\u003e\",\"\u003cSpecTypeB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User creates test type \"\u003cTestTypeA\u003e\",\"\u003cTestTypeB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User performing delete action on test type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User creates inspection type \"\u003cnoLink\u003e\",\"\u003cBOM\u003e\",\"\u003cSizeChart\u003e\",\"\u003cSpecDS\u003e\",\"\u003cStyleReview\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User creates contractual documents \"\u003cContrctAll\u003e\",\"\u003cSimple\u003e\",\"\u003cRA\u003e\",\"\u003cHED\u003e\",\"\u003cHRD\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User creates LookUp items \"\u003cLookUp\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User creates theme master \"\u003cAll\u003e\",\"\u003csingle\u003e\",\"\u003cmultiple\u003e\",\"\u003cAVsingle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on update cnfiguration",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "validate and accept the alert",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "configuration-and-setup;style-type-and-material-type;",
  "rows": [
    {
      "cells": [
        "All",
        "single",
        "multiple",
        "LookUp",
        "AVsingle",
        "ContrctAll",
        "Simple",
        "RA",
        "HED",
        "HRD",
        "InspnoLink",
        "BOM",
        "SizeChart",
        "SpecDS",
        "StyleReview",
        "StyleTypeA",
        "StyleTypeB",
        "StyleTypeC",
        "StyleTypeD",
        "Standalone",
        "Structurecomponent",
        "Tool",
        "StyleBOM",
        "MaterialBOM",
        "All",
        "List",
        "Values",
        "Tolerance",
        "SpecTypeA",
        "SpecTypeB",
        "TestTypeA",
        "TestTypeB"
      ],
      "line": 25,
      "id": "configuration-and-setup;style-type-and-material-type;;1"
    },
    {
      "cells": [
        "TM-All Season",
        "TM-Single Season",
        "TM-Multiple Season",
        "New-LookUp",
        "TM-Allow material variation",
        "CDOC-ALL",
        "CDOC-Simple",
        "CDOC-RA",
        "CDOC-HED",
        "CDOC-HRD",
        "Ins Section-No Link",
        "Ins Section-BOM",
        "Ins Section-Size Chart",
        "Ins Section-Spec Data Sheet",
        "Ins Section-Style Review",
        "Apparel - Color and Size",
        "Accessories - Only Color",
        "Apparel - Only Size",
        "Accessories - No color and Size",
        "Fabric - Stanadlone",
        "Fabric - Structure Component",
        "Fabric - Tool",
        "Apparel BOM",
        "Material BOM",
        "SC-Lock All",
        "SC-Lock Dimension",
        "SC-Lock Values",
        "SC-Lock Tolerance",
        "Spec Type-01",
        "Spec Type-02",
        "Wash Test",
        "Chemical Test"
      ],
      "line": 26,
      "id": "configuration-and-setup;style-type-and-material-type;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "style type and material type",
  "description": "",
  "id": "configuration-and-setup;style-type-and-material-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User launches centric application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User Click on setup icon",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User creates style type \"Apparel - Color and Size\",\"Accessories - Only Color\",\"Apparel - Only Size\",\"Accessories - No color and Size\"",
  "matchedColumns": [
    16,
    17,
    18,
    15
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User fill the style type attributes fields",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User creates material type \"Fabric - Stanadlone\",\"Fabric - Structure Component\",\"Fabric - Tool\"",
  "matchedColumns": [
    19,
    20,
    21
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User creates BOM type \"Apparel BOM\",\"Material BOM\"",
  "matchedColumns": [
    22,
    23
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User creates size chart type \"TM-All Season\",\"SC-Lock Dimension\",\"SC-Lock Values\",\"SC-Lock Tolerance\"",
  "matchedColumns": [
    0,
    25,
    26,
    27
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User creates spec type \"Spec Type-01\",\"Spec Type-02\"",
  "matchedColumns": [
    28,
    29
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User creates test type \"Wash Test\",\"Chemical Test\"",
  "matchedColumns": [
    30,
    31
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User performing delete action on test type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User creates inspection type \"\u003cnoLink\u003e\",\"Ins Section-BOM\",\"Ins Section-Size Chart\",\"Ins Section-Spec Data Sheet\",\"Ins Section-Style Review\"",
  "matchedColumns": [
    11,
    12,
    13,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User creates contractual documents \"CDOC-ALL\",\"CDOC-Simple\",\"CDOC-RA\",\"CDOC-HED\",\"CDOC-HRD\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User creates LookUp items \"New-LookUp\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User creates theme master \"TM-All Season\",\"TM-Single Season\",\"TM-Multiple Season\",\"TM-Allow material variation\"",
  "matchedColumns": [
    0,
    1,
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on update cnfiguration",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "validate and accept the alert",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.user_launches_centric_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_Click_on_setup_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel - Color and Size",
      "offset": 25
    },
    {
      "val": "Accessories - Only Color",
      "offset": 52
    },
    {
      "val": "Apparel - Only Size",
      "offset": 79
    },
    {
      "val": "Accessories - No color and Size",
      "offset": 101
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_style_type(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConfigurationPageSteps.user_fill_the_style_type_attributes_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fabric - Stanadlone",
      "offset": 28
    },
    {
      "val": "Fabric - Structure Component",
      "offset": 50
    },
    {
      "val": "Fabric - Tool",
      "offset": 81
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_material_type(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel BOM",
      "offset": 23
    },
    {
      "val": "Material BOM",
      "offset": 37
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_BOM_type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TM-All Season",
      "offset": 30
    },
    {
      "val": "SC-Lock Dimension",
      "offset": 46
    },
    {
      "val": "SC-Lock Values",
      "offset": 66
    },
    {
      "val": "SC-Lock Tolerance",
      "offset": 83
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_size_chart_type(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Spec Type-01",
      "offset": 24
    },
    {
      "val": "Spec Type-02",
      "offset": 39
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_spec_type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Wash Test",
      "offset": 24
    },
    {
      "val": "Chemical Test",
      "offset": 36
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_test_type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConfigurationPageSteps.user_performing_delete_action_on_test_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cnoLink\u003e",
      "offset": 30
    },
    {
      "val": "Ins Section-BOM",
      "offset": 41
    },
    {
      "val": "Ins Section-Size Chart",
      "offset": 59
    },
    {
      "val": "Ins Section-Spec Data Sheet",
      "offset": 84
    },
    {
      "val": "Ins Section-Style Review",
      "offset": 114
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_inspection_type(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CDOC-ALL",
      "offset": 36
    },
    {
      "val": "CDOC-Simple",
      "offset": 47
    },
    {
      "val": "CDOC-RA",
      "offset": 61
    },
    {
      "val": "CDOC-HED",
      "offset": 71
    },
    {
      "val": "CDOC-HRD",
      "offset": 82
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_contractual_documents(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New-LookUp",
      "offset": 27
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_LookUp_items(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TM-All Season",
      "offset": 27
    },
    {
      "val": "TM-Single Season",
      "offset": 43
    },
    {
      "val": "TM-Multiple Season",
      "offset": 62
    },
    {
      "val": "TM-Allow material variation",
      "offset": 83
    }
  ],
  "location": "ConfigurationPageSteps.user_creates_theme_master(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_click_on_update_cnfiguration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConfigurationPageSteps.validate_and_accept_the_alert()"
});
formatter.result({
  "status": "skipped"
});
});