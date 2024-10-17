function greetings() {
  console.log("Hello Cydeo");
  console.log("Hello Programmer");
}

greetings();
console.log("Test completed");

console.log("========================");

function displayValue(value) {
  console.log(`The value is "${value}"`);
}

displayValue();
displayValue("here is value");
displayValue(100);
displayValue("");

console.log("========================");

function defultValue(value = "you did not give anything") {
  console.log(`The value is "${value}"`);
}

defultValue();
defultValue("set up ");

console.log("========================");
function square(number) {
  //number is parameters
  return number * number;
}

let result = square(20); //arguments is 20
console.log(result);

result = square();
console.log(result);
