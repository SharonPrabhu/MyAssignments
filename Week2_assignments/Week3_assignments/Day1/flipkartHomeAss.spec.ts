import test from '@playwright/test'

test("Launch Webkit Browser",async({page})=>{

await page.goto("https://www.flipkart.com/")
await page.waitForTimeout(15000)
console.log("The Page title is : " +await page.title())
console.log("The Page Url is : " +page.url())
}
)