// Assignment: 1 Create Lead
// 1. Login to https://login.salesforce.com
// 2. Click on toggle menu button from the left corner
// 3. Click view All and click Sales from App Launcher
// 4. Click on Leads tab
// 5. Click on New button
// 6. Select Salutation dropdown
// 7. Enter the Last Name
// 8. Enter the Company Name
// 9. Click Save and Verify Leads name created


import test from "@playwright/test";

test ("Create Salesforce Lead" , async({page})=>{

//Login to Salesforce

 await page.goto("https://login.salesforce.com")
 await page.locator("[id = 'username']").fill("dilipkumar.rajendran@testleaf.com")
 await page.locator("[id = 'password']").fill("TestLeaf@2025")
 await page.locator("[id='Login']").click()

//Click on toggle menu button from the left corner
 await page.locator("//div[@class='slds-icon-waffle']").click();
//Click view All and click Sales from App Launcher
 await page.locator("(//button[@class='slds-button'])[2]").click()
 //await page.locator("//button[@class='slds-button']").last().click()
 await page.waitForTimeout(5000)
 await page.locator("//p[text()='Sales']").click()
//Click on Leads tab 
 await page.locator("(//span[text()='Leads'])[1]").click()
//Click on New button
 await page.locator("//div[text()='New']").click()
 //await page.waitForTimeout(5000)

//Select Salutation dropdown
 await page.locator("//button[@name='salutation']").click()
 await page.click('//span[text()="Ms."]')

//Enter the Last Name,Company Name and click Save
 await page.locator("//input[@name='lastName']").fill("Isaac")
 await page.locator("//input[@name='Company']").fill("Jetro Space Park")
 await page.locator("//button[@name='SaveEdit']").click()
 })