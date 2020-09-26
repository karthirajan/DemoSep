Feature: To create new session

  @tag2
  Scenario Outline: Title of your scenario outline
    Given user is using the baseURI
    When The user makes the post call to the endpoint "/session" with "<UsrName>","<Password>"
    Then user need to get a response code: 200
    When User Creates Season Hierarchy "/seasons","<SeasonName>","<SeasonCode>","<SeasonDesc>","<Status>"
    Then user need to get a response code: 200

    Examples: 
      | UsrName       | Password | SeasonName | SeasonCode       | SeasonDesc | Status |
      | Administrator | centric8 | Winter     | 123 - Automation | Automation | Active |
