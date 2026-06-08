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
//Fill the Salutation
 await page.locator("[id ='createLeadForm_personalTitle']").fill("Mr")
//Fill the Title
 await page.locator("[id ='createLeadForm_generalProfTitle']").fill("Senior Engineer")
//Fill the Annual Revenue
 await page.locator("[id ='createLeadForm_annualRevenue']").fill("10L/year")
//Fill the Department
 await page.locator("[id ='createLeadForm_departmentName']").fill("SL Testing")
//Fill the Phone Number
 await page.locator('#createLeadForm_primaryPhoneNumber').fill('6383856288');
//Click Create Lead button
 await page.locator("//input[@name='submitButton']").click()
})