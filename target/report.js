$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/sample.feature");
formatter.feature({
  "line": 1,
  "name": "To create new session",
  "description": "",
  "id": "to-create-new-session",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "to-create-new-session;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is using the baseURI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user makes the post call to the endpoint \"/session\" with \"\u003cUsrName\u003e\",\"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user need to get a response code: 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Creates Season Hierarchy \"/seasons\",\"\u003cSeasonName\u003e\",\"\u003cSeasonCode\u003e\",\"\u003cSeasonDesc\u003e\",\"\u003cStatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user need to get a response code: 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "to-create-new-session;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "UsrName",
        "Password",
        "SeasonName",
        "SeasonCode",
        "SeasonDesc",
        "Status"
      ],
      "line": 12,
      "id": "to-create-new-session;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "Administrator",
        "centric8",
        "Winter",
        "123 - Automation",
        "Automation",
        "Active"
      ],
      "line": 13,
      "id": "to-create-new-session;title-of-your-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "to-create-new-session;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is using the baseURI",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user makes the post call to the endpoint \"/session\" with \"Administrator\",\"centric8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user need to get a response code: 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User Creates Season Hierarchy \"/seasons\",\"Winter\",\"123 - Automation\",\"Automation\",\"Active\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user need to get a response code: 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonScenarioSteps.i_am_using_the_baseURI()"
});
formatter.result({
  "duration": 655755800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/session",
      "offset": 46
    },
    {
      "val": "Administrator",
      "offset": 62
    },
    {
      "val": "centric8",
      "offset": 78
    }
  ],
  "location": "LoginSteps.the_user_makes_the_post_call_to_the_endpoint_with(String,String,String)"
});
formatter.result({
  "duration": 2119557100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "CommonScenarioSteps.i_need_to_get_a_response_code(int)"
});
formatter.result({
  "duration": 2921900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/seasons",
      "offset": 31
    },
    {
      "val": "Winter",
      "offset": 42
    },
    {
      "val": "123 - Automation",
      "offset": 51
    },
    {
      "val": "Automation",
      "offset": 70
    },
    {
      "val": "Active",
      "offset": 83
    }
  ],
  "location": "LoginSteps.user_Creates_Season_Hierarchy(String,String,String,String,String)"
});
formatter.result({
  "duration": 710286400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "CommonScenarioSteps.i_need_to_get_a_response_code(int)"
});
formatter.result({
  "duration": 1333900,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat com.common.CommonScenarioSteps.i_need_to_get_a_response_code(CommonScenarioSteps.java:25)\r\n\tat ✽.Then user need to get a response code: 200(src/test/resources/Features/sample.feature:9)\r\n",
  "status": "failed"
});
});