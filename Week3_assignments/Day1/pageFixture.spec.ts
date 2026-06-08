import test from '@playwright/test'

test("Page Fixture",async({page})=>{

await page.goto("https://www.amazon.in/")
await page.waitForTimeout(15000)
console.log(await page.title())
}
)