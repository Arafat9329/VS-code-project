for (let i = 0; i < 10; i++) {
  console.log("Hello world");
}

console.log();
console.log("======");
console.log();

for (let index = 0; index < 4; index++) {
  console.log(index);
}

console.log();
console.log("======");
console.log();

for (let i = 0; i < 4; i++) {
  console.log("hello");
}
console.log();
console.log("======");
console.log();

for (let i = 0; i < 6; i++) {
  if (i == 3) {
    console.log("break at " + i);
    break; // terminates the loop
  }

  console.log(i);
}
console.log();
console.log("======");
console.log();

for (let i = 0; i < 6; i++) {
  if (i == 2 || i == 4) {
    console.log(i + " get skip");
    continue; // skip teh iteration
  }

  console.log(i);
}
