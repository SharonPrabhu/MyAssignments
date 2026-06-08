// Assignment: 4 Edit Individuals
// Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher
// 4. Click on the Individuals tab
// 5. Search the Individuals last name
// 6. Click on the Dropdown icon and Select Edit
// 7. Select Salutation as 'Mr'
// 8. Now enter the first name
// 9. Click on Save and Verify the first name 

import test, { expect } from "@playwright/test"

test ("Edit Salesforce Individual" , async({page})=>{

//Login to Salesforce

 await page.goto("https://login.salesforce.com")
 await page.locator("[id = 'username']").fill("dilipkumar.rajendran@testleaf.com")
 await page.locator("[id = 'password']").fill("TestLeaf@2025")
 await page.locator("[id='Login']").click()

//Click on toggle menu button from the left corner
 await page.locator("//div[@class='slds-icon-waffle']").click()
//Click View All
 await page.locator("(//button[@class='slds-button'])[2]").click()
// Click on the Individuals tab
// Search the Individuals last name
 await page.locator("//p[text()='Individuals']").click()
 await page.locator("//input[@name='Individual-search-input']").fill("isaac")
 await page.keyboard.press('Enter')
 //await page.locator("//span[text()='Show more actions']").click()
 //await page.locator("//a[@title='Show 2 more actions']").click()
 //await page.click('//a[@title="Edit"]');
 //await page.locator("//a[@title='Isaac']").first().click();
//Click on the first row from search results
 await page.locator("//a[contains(@title, 'Isaac')]").first().click();
//Click on Edit icon
 await page.locator("//div[@title='Edit']").click();
// Select Salutation as 'Mr'
// Now enter the first name
// Click on Save and Verify the first name 
 await page.locator("(//a[@class='select'])[1]").click();
 await page.locator("li[class='uiMenuItem uiRadioMenuItem']").nth(3).click()
 await page.locator("//input[@placeholder='First Name']").fill("Sharon")
 await page.locator("//span[text()='Save']").click();
 await page.waitForTimeout(2000)
// Verifying the updated name is as expected
 await expect(page.locator("//span[text()= 'Mrs. Sharon Isaac']"))
    .toContainText("Sharon")
    
})