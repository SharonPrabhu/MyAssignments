// Assignment: 3 Create Individuals
// Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher
// 4. Click on the Dropdown icon in the Individuals tab
// 5. Click on New Individual
// 6. Enter the Last Name
// 7. Click save and verify Individuals Name

import test from "@playwright/test";

test ("Create Salesforce Individual" , async({page})=>{

//Login to Salesforce

 await page.goto("https://login.salesforce.com")
 await page.locator("[id = 'username']").fill("dilipkumar.rajendran@testleaf.com")
 await page.locator("[id = 'password']").fill("TestLeaf@2025")
 await page.locator("[id='Login']").click()

//Click on toggle menu button from the left corner
 await page.locator("//div[@class='slds-icon-waffle']").click()
//Click View All 
 await page.locator("(//button[@class='slds-button'])[2]").click()

//Click on New Individual and Enter the Last Name and Save It
 await page.locator("//p[text()='Individuals']").click()
 await page.locator("//div[text()='New']").click()
 await page.locator("//input[@placeholder='Last Name']").fill("Isaac")
 await page.locator("//span[text()='Save']").click()
})