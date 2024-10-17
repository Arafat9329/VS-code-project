class Employee {
  constructor(
    name = "defult name",
    age = "defultdefult agae",
    salary = "defult",
    jobTitle = "defult job title"
  ) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working here`);
  }
}

let employee1 = new Employee();

console.log(employee1);
console.log(employee1.name);

employee1.name = "Arpat";
console.log(employee1);
console.log(employee1.name);

employee1.age = "20";
employee1.salary = "10,000";
employee1.jobTitle = "DEV";
console.log(employee1);
console.log(employee1.name);

console.log("=======================");

let employee2 = new Employee();
console.log(employee2);

console.log("==========work=============");
//console.log(employee1.work());
//console.log(employee2.work());
