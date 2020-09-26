package com.stepdefinition;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.util.PdfReportGenerator;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features/sample.feature", glue = { "com.stepdefinition",
		"com.common" }, dryRun = false, monochrome = true, plugin = { "html:target" })

public class TestRunner extends PdfReportGenerator {
	
	@AfterClass
	public static void report() {
		
		generateReport("env1");

	}

}
