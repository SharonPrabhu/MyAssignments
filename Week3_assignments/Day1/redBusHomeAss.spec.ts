import test from '@playwright/test'

test("Launch Edge Browser",async({page})=>{

await page.goto("https://www.redbus.in/")
await page.waitForTimeout(15000)
console.log("The Page title is : " +await page.title()) //to get the page title
console.log("The Page Url is : " + page.url()) // to get the page url
}
)