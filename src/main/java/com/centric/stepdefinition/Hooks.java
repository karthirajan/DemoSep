package com.centric.stepdefinition;

import java.io.File;
import java.util.Collections;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.MarkupHelper;
import com.centric.resources.Commonactions;
import com.relevantcodes.extentreports.ExtentReports;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Commonactions {
	
	Commonactions ca = new Commonactions();
	private static final String ITestResult = null;
	public static ExtentReports extent;
	com.relevantcodes.extentreports.ExtentTest logger;
	
	@Before
	public void before() {

		 ca.launch("http://win16sql19-ccd.centricsoftware.com/WebAccess/login.html");

	}
	
	@After
	public void after(Scenario scenario) {
		try{
			if(scenario.isFailed()){
				
				final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
				
				scenario.embed(screenshot, "image/png");
			}else{
				scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES), "image/png");
			}}
			catch(Exception e){
				
			}
		
		driver.close();
	}

}
