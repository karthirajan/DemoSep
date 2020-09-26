package com.centric.stepdefinition;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

import javax.imageio.ImageIO;

import org.joda.time.LocalDateTime;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.centric.resources.Commonactions;
import com.centric.resources.ExtentCucumberFormatter;
import com.centric.resources.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features\\A_Config_Setup.feature",
                 glue = "com.centric.stepdefinition",
                 plugin = {"html:target","json:target/reports.json","com.centric.resources.ExtentCucumberFormatter:"},
                 dryRun = false,
                 tags={"@tag2"})

public class TestRunner {

	@BeforeClass
	public static void beforeClass() throws IOException {
		LocalDateTime now = LocalDateTime.now();
		int year = now.getYear();
		int month = now.getMonthOfYear();
		int day = now.getDayOfMonth();
		int hour = now.getHourOfDay();
		int minute = now.getMinuteOfHour();
		int second = now.getSecondOfMinute();
		String snewFilename1 = year + "_" + month + "_" + day + "_" + hour + "_" + minute + "_" + second;
		String filePath = System.getProperty("user.dir") + "/src/main/resources/AutomationSuite/Report_" + snewFilename1
				+ ".html";
		File file = new File(filePath);
		ExtentCucumberFormatter.setExtentHtmlReport(file);
	}

	
}
