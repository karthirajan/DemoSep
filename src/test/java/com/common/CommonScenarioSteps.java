package com.common;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CommonScenarioSteps extends Helper {
	private StepDefinitionHelper commonCode = getStepDefinitionHelper();

	@Given("^user is using the baseURI$")
	public void i_am_using_the_baseURI() throws Exception {
		commonCode.configureBaseUri();
		System.out.println("given");
	}


	@Then("^user need to get a response code: (\\d+)$")
	public void i_need_to_get_a_response_code(int code) throws Exception {
		statusCode = code;

	    Assert.assertEquals(code, response.getStatusCode());
		System.out.println(response.getStatusCode());
	}
}
