import test from "@playwright/test";

test ("Telerik Dropdown" , async({page})=>{



 await page.goto("https://www.telerik.com/contact")
 await page.selectOption('#Dropdown-1',{value:'Licensing/Pricing/Quotes'})
 await page.waitForTimeout(2000)
 await page.selectOption("#Dropdown-2",{index:2})
 await page.waitForTimeout(2000)
 await page.selectOption(".js-country-field",{label:'Albania'})
})