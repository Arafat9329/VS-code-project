let school = "Cydeo School";

console.log("console.log(typeof school);");
console.log(typeof school);

console.log();
console.log("console.log(school.length);");
console.log(school.length);

console.log();
console.log("console.log(school.charAt(1));");
console.log(school.charAt(1));

console.log();
console.log("console.log(school[1]);");
console.log(school[1]);

console.log();
console.log("console.log(school[school.length-1]);");
console.log(school[school.length - 1]);

console.log();
console.log("-----------------");

school.toLowerCase(); //'cydeo school'
console.log(school);

let word1 = "JavaScript";
let word2 = "JavaScript";

console.log(word1 === word2);
console.log(word1.toLowerCase() === word2.toLowerCase);

console.log("----------");

let x = "Python Python";
// x=x.replace("Python", "JavaScript");//replace the first maching
x = x.replace(/Python/g, "javaScrip"); //g is the gloval flag

console.log(x);
console.log("----------");

let str = "qwertyuiopasdfghjklQWERTYUK2345678JHGFDS";

let result = str.replace(/\d/g, ""); //replace all the number
console.log(result);

console.log("---------------------------------------");

let email = "muhtar.cydeoschool@gmail.com";

let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(domain);

console.log(email.includes("hotmail"));

console.log(email.endsWith("gmail.com"));

console.log("---------------------------------------");

let studentName = "Hasan";

let studentAge = 30;

console.log(
  "Student's name is: " +
    studentName +
    ", and student's age is " +
    studentAge +
    " years old"
);

console.log(
  `Student's name is ${studentName}, and student's age is ${studentAge} years old`
);

console.log("---------------------------------------");

let course = "Playwright automation";

for (let index = 0; index < course.length; index++) {
  console.log(course[index]);
}
