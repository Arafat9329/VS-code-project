console.log("Test started");
console.log("result");

try {
  console.log(result);
} catch (error) {
  console.log("Error: got you");
} finally {
  console.log("Finally block executed");
}
console.log("Test complted");

console.log("===========");
console.log("Test started");

let browser = "cyber";

browser = browser.toLocaleLowerCase();

if (browser == "chrome" || browser == "safari" || browser == "firefox") {
  console.log("Browser is supported");
} else {
  throw new Error(`invalid browser: ${browser}`);
}
console.log("Test complted");
console.log("===========");
