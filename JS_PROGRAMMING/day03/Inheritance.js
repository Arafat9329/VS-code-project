class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Student extends Person {
  constructor(name, age, gender, grade) {
    super(name, age, gender);
    this.grade = grade;
  }

  study(){
    console.log(`${this.name} is studying grade ${this.grade}`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

let student1 = new Student("John Doe", 20, "Male", "HHSS");
let teacher1 = new Teacher("Jun Aoe", 20, "Female");

console.log(student1);
console.log(teacher1);

student1.study();
teacher1.teach();