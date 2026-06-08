import test, { chromium } from '@playwright/test';
test ("Launch Browser" , async () => {
    const browser= await chromium.launch({headless:false})
    const context= await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.amazon.in")

const pageTitle= await page.title()
console.log("Page Title is : "+pageTitle)

})