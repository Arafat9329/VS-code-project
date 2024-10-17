// create a for loop that starts form 1 and ends at 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("================");

// create an array of string an add 10 students names to it
let students = [
  "Alice Done",
  "Bob Franklin",
  "Ali Muhan",
  "Ford Wilson",
  "Jane Smith",
  "Kate Bell",
  "Lisa Johnson",
  "Michael Brown",
  "Nancy Lee",
  "Olivia Wilson",
];
console.log("================");

//display all the students names on the console
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
console.log("================");

// set the first student name to Muhtar and last student name to Kuzzat and print all names on the console
students[0] = "Muhtar";
students[students.length - 1] = "Kuzzat";

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
console.log("================");

// display all the elemets of students array in reverse order
for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}
console.log("================");

let email = "CydeoSchool@yahoo.com";
//check if the email address is contains '@gmail.com'

if (email.includes("@gmail.com")) {
  console.log("Email address contains '@gmail.com'");
} else {
  console.log("Email address does not contain '@gmail.com'");
}
console.log("================");

// use string manipulation to extract the domain name from the email address

let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log("Domain name: " + domain);
console.log("================");

let numbers = [100, 200, 400, 5, 6, 7, 8, 9, 1, 0];
//write a program that can display the maximum and minimum values in the array. do not use any built-in functions.

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Maximum value: " + max);
console.log("Minimum value: " + min);
console.log("================");

let nums = [5, 63, 5, 4, 8, 6, 1, 4, 8, 9, 5, 41];
//write a program that can sort the nums array in ascending order. do not use any built-in sorting functions.

for (let i = 0; i < nums.length - 1; i++) {
  for (let j = 0; j < nums.length - 1 - i; j++) {
    if (nums[j] > nums[j + 1]) {
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    }
  }
}

console.log(`Sorted array:  ${nums}`);

console.log("================");

// create an array that contains multiple duplicated elements

let duplicates = [
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  7,
  7,
  8,
  9,
  9,
  9,
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  7,
  7,
  8,
  9,
  9,
  9,
  ,
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  7,
  7,
  8,
  9,
  9,
  9,
];

//write a program that can remove all the duplicate elements form the array and return a new array with unique elements. print the new array on the console.

let uniqueArray = [];

for (let i = 0; i < duplicates.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniqueArray.length; j++) {
    if (duplicates[i] === uniqueArray[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    uniqueArray.push(duplicates[i]);
  }
}

console.log(`Unique array: ${uniqueArray}`);
console.log("================");

/*
create a class named Item with the following requirements:
attributes:
itemName,price,quantity

Methods:
constructor: initailize the item with itemName, price, and quantity
calculateTotalPrice: return the total price of the item by multiplying the price by the quantity
toString: return a string representation
*/

/**
 * Represents an item with a name, price, and quantity.
 */
class Item {
  /**
   * Creates a new Item instance.
   * @param {string} itemName - The name of the item.
   * @param {number} price - The price of the item.
   * @param {number} quantity - The quantity of the item.
   */
  constructor(itemName, price, quantity) {
    this.itemName = itemName;
    this.price = price;
    this.quantity = quantity;
  }

  /**
   * Calculates the total price of the item.
   * @returns {number} The total price (price * quantity).
   */
  calculateTotalPrice() {
    return this.price * this.quantity;
  }

  /**
   * Returns a string representation of the item.
   * @returns {string} A string containing the item's name, price, and quantity.
   */
  toString() {
    return `Item: ${this.itemName}, Price: ${this.price}, Quantity: ${this.quantity}`;
  }
}

// create instance of Item and display their information

let item1 = new Item("Apple", 2.5, 5);
console.log(item1.toString());
console.log("Total price: " + item1.calculateTotalPrice());

console.log("================");

/**
 * Reverses the order of elements in an array.
 * @param {Array} arr - The input array to be reversed.
 * @returns {Array} A new array with the elements in reverse order.
 */
function reverseArray(arr) {
  let reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}
