let elements = ["Java", "Python", 12, 13, 14, true, false];

console.log(elements);

console.log("-------------------------------------");

let students = ["Kibriyo", "Nessar", "Daur", "Aysen"];

console.log(students);
console.log(students.length);

students.push("Muhtar");
students.push("Kasim");

console.log(students);
console.log(students.length);

students[students.length - 2] = "Mehmet";

console.log(students);

console.log(students[0]);

console.log("================================");

for (let each of students) {
  console.log(each);
}

console.log("================================");
for (let eachChar of "cydeo") {
  console.log(eachChar);
}

console.log("================================");
console.log(students);

students.unshift("Ahmad");
students.unshift("Ahmad");
students.unshift("Ahmad");
console.log(students);

students.splice(1, 2); // removed index of 1 and 2 elements in the list
console.log(students);

students.shift(); // removed first elements in the list
console.log(students);

students.pop(); // removed last elements in the list
console.log(students);
