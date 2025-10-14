console.log(x);  
// ❌ ReferenceError: x is not defined
// 'x' was never declared anywhere in the code, so JavaScript cannot find it in the current scope.


console.log(a);  
let a = 20;  
// ❌ ReferenceError: Cannot access 'a' before initialization
// 'a' is declared using let, so it is hoisted but remains in the Temporal Dead Zone (TDZ)
// until the declaration line is executed. Accessing it before that causes an error.


const b = 40;  
b = 40;  
console.log(b);  
// ❌ TypeError: Assignment to constant variable
// 'b' is declared as a const, meaning its value cannot be reassigned after initialization.


const c;  
console.log(c);  
// ❌ SyntaxError: Missing initializer in const declaration
// const variables must be initialized at the time of declaration. 
// You cannot just write `const c;` without assigning a value.
