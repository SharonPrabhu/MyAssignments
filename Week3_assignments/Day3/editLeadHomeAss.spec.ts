// Assignment: 2 Edit Lead
// http://leaftaps.com/opentaps/control/main
// 1. Launch the browser
// 2. Enter the username
// 3. Enter the password
// 4. Click Login
// 5. Click CRM/SFA link
// 6. Click Leads link
// 7. Click on Create Lead
// 8. Enter company name
// 9. Enter first name
// 10.Enter last name
// 11.Click on Create Lead button
// 12.Click Edit
// 13.Change the company name
// 14.Click Update

import test from "@playwright/test";

test ("Create Test Lead" , async({page})=>{

//Navigate to the URL: http://leaftaps.com/opentaps/control/main
 await page.goto("https://leaftaps.com/opentaps/control/main")
//Enter the username
 await page.locator("[id = 'username']").fill("democsr")
//Enter the Password
 await page.locator("#password").fill("crmsfa")
//Click the Login button
 await page.locator(".decorativeSubmit").click()
//Click CRM/SFA
 await page.locator('text=CRM/SFA').click()
//Click Leads
 await page.locator(`text='Leads'`).click()
//Click Create Lead
 await page.locator(`text='Create Lead'`).click()
//Fill the Company Name
 await page.locator("[id ='createLeadForm_companyName']").fill("Astro.Ltd")
//Fill the First Name
 await page.locator("[id ='createLeadForm_firstName']").fill("Johann")
//Fill the Last Name
 await page.locator("[id ='createLeadForm_lastName']").fill("Prince")
//Click Create Lead button
 await page.locator("//input[@name='submitButton']").click()
//Click Edit and Update Company Name
 await page.locator("//a[text()='Edit']").click()
 await page.locator("[id ='updateLeadForm_companyName']").fill("Updated Tech Park")
 await page.locator("//input[@value='Update']").click()

})