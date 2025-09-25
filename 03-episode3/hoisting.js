
console.log(a); // undefined (var is hoisted)
var a = 10;

console.log(b); // ReferenceError (TDZ)
let b = 20;

sayHello(); // Works, because function declarations are hoisted
function sayHello() {
  console.log("Hello World!");
}


// Hoisting is a phenomenon in javascript that allows to access varibles and function even before it is intialized without any error, it is because even before the code is executed memory is allocated variables and function during the memory creation phase