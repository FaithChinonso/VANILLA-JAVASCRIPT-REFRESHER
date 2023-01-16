const name = "Faith";
//top-level code that will be executed in the global execution context
const first = () => {
  let a = 1;
  const be = second();
  a = a + b;
  return a;
};
function second() {
  var c = 2;
  return c;
}
const x = first();
//function first and second will be declared now but the code inside will be executed later when the functions are called
