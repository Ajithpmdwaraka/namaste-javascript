//Function Statement aka Function Declaration

//A way of defining a function with the function keyword and a name.
//These are hoisted, meaning they can be called before their definition.

function a() {
    console.log("a called");
}

//Function Expression

//A function assigned to a variable. It is not hoisted.
//Can be anonymous or named.

var b = function () {
    console.log("b called");
}

//Function Declaration

//Anonymous Function

//A function without a name. Commonly used in function expressions, callbacks, etc.

setTimeout(function () {
  console.log("This is anonymous!");
}, 1000);

//Named Function Expression

//A function expression with a name. Useful for recursion and debugging.

const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

//Difference between Parameters and Arguments

//Parameters → Variables defined in the function definition (placeholders).
//Arguments → Actual values passed when calling the function.

function add(a, b) {   // a, b → parameters
  return a + b;
}

console.log(add(2, 3)); // 2, 3 → arguments

//First Class Function

//In JavaScript, functions are first-class citizens. This means:
//They can be stored in variables.
//Passed as arguments.
//Returned from other functions.

function greet() {
  return "Hello";
}

function wrapper(fn) {
  console.log(fn());
}

wrapper(greet); // Passing function as an argument

//Arrow Function

//A shorter syntax for writing functions, introduced in ES6.
const greet = () => {
  console.log("Hello from arrow function!");
};
