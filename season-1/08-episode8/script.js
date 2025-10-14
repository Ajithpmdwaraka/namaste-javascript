
console.log(a);
console.log(b);

var a = 6;
let b = 20;

// Hoisting refers to the process where declarations of variables, functions, and classes are moved to the top of their scope during the memory creation phase, before the code is executed. Variables declared with var are initialized with the placeholder value undefined, while functions are hoisted along with their entire definition. Variables declared with let and const are also hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration line is executed and they are initialized. The TDZ is the time period between the start of the scope (hoisting) and the point where the variable is initialized