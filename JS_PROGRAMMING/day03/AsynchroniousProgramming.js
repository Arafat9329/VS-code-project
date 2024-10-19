async function findElement(locator) {
  return new Promise((resolved, reject) => {
    if (locator == "valid-locator") {
      resolved("Elements found");
    } else {
      reject("Invalid locator");
    }
  });
}

// async function clickElement(locator) {
//  findElement(locator)
//  .then(result =>console.log(result))
//  .catch(error => console.error(error));
// };

async function clickElement(locator) {
  findElement(locator)
    .then((result) => {
      console.log(result);
      console.log("Element clicked");
    })
    .catch((error) => {
      console.error(error);
      console.log("Element not clicked");
    });
}

console.log("============================================================");
async function test() {
  await clickElement("valid-locator");
  await clickElement("invalid-locator");
}

test();
