const utiliti = require("./Utilility.js"); // if it is in same folder we use ./

let resutl = utiliti.calculate(20, 40, "+");
console.log(resutl);

resutl = utiliti.square(35);
console.log(resutl);

resutl = utiliti.cube(9);
console.log(resutl);

const { cube } = require("./Utilility.js"); //if you wnat import only one method then you can use {}

resutl = cube(4);
console.log(resutl); //also you can direcetd call methid without calls name like statu method
