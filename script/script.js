"use-strict";

const name = "Faith";
//top-level code that will be executed in the global execution context
const first = () => {
  let a = 1;
  const b = second();
  a = a + b;
  return a;
};
function second() {
  var c = 2;
  return c;
}
const x = first();
//function first and second will be declared now but the code inside will be executed later when the functions are called
//SCOPE
const third = () => {
  const age = 30;
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }
  function fourth() {
    const job = "teacher";

    console.log(`${name} is a ${age}-old ${job}`);
  }
  fourth();
};
third();
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName);
  return age;
}
const firstName = "Faith";
calcAge(1994);
