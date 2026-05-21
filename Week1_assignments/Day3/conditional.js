//Part A:
function launchBrowser(browserName)
{
if(browserName == "Chrome")
{
    console.log("The Browser name is Chrome");
}
else {
        console.log("Browser name is Firefox");
    }
}


// Part B:

 function runTests(testType)
 {

switch (testType) {
    case "Smoke":
        console.log("Print Smoke")
        break;
    case "Sanity":
        console.log("Print Sanity")
         break;
    case "Regression":
        console.log("Regression")
         break;
    default:
        console.log("Smoke Validation is Required")
        break;
}
 }
launchBrowser("Firefox")
runTests("Sanity")
