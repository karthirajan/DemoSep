package com.stepdefinition;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Properties;

import org.junit.Assert;

import com.common.Helper;
import com.common.StepDefinitionHelper;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jsonBuilder.CreateSeason;
import jsonBuilder.Login;


public class LoginSteps extends Helper {

	public static void main(String[] args) throws IOException {
		FileReader reader=new FileReader("src//test//resources//Test.properties");
		Properties prop = new Properties();
		prop.load(reader);
		
		String property = prop.getProperty("url");
		System.out.println(property);
	}
	
	
	private StepDefinitionHelper commonCode = getStepDefinitionHelper();

	@When("^The user makes the post call to the endpoint \"([^\"]*)\" with \"([^\"]*)\",\"([^\"]*)\"$")
	public void the_user_makes_the_post_call_to_the_endpoint_with(String endpoint, String arg2, String arg3) throws Throwable {
	 		
		
		HashMap<String, String> headers = new HashMap<String, String>();
		headers.put("Content-Type", "application/json");
		Login createOrder = new Login();
		createOrder.setUsername(arg2);
		createOrder.setPassword(arg3);
        
		response = null;
		response = commonCode.makePostCallWithHeader(endpoint, createOrder, headers);
		
	}

	@Then("^The user validates the token$")
	public void the_user_validates_the_token() throws Throwable {
	 		
		
		Login order = response.as(Login.class);
		String status = response.getStatusLine();
		System.out.println(status);
		
	}
	
	@When("^User Creates Season Hierarchy \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void user_Creates_Season_Hierarchy(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	    
		HashMap<String, String> headers = new HashMap<String, String>();
		headers.put("Content-Type", "application/json");
		CreateSeason s = new CreateSeason();
		s.setNode_name(arg2);
		s.setCode(arg3);
		s.setDescription(arg4);
		s.setStatus(arg5);
		
		response = null;
		response = commonCode.makePostCallWithHeader(arg1, s, headers);
		
		String asString = response.getBody().asString();
		System.out.println(asString);
		
		
	}
}