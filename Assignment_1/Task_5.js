// Task 5: Hoisting
// Description: Demonstrate hoisting by writing code snippets that show the difference in behavior between var, let, and const.
// Requirements:
// Write code snippets that illustrate variable hoisting for var, let, and const.
// Explain the output in comments.

console.log(a);
var a = 1;
console.log(a);

// console.log(b); //If this statement is commented out then the code will not display the value of the variable b due to reference error.
let b = 10;
console.log(b);
b = 15; // This will work
console.log(b);

// console.log(c); 
const c = 100;
console.log(c);
c = 150; // This will not work
console.log(c);

// Explanation:
// var hoists the variable declaration to the top of the scope, but the initialization remains in place.
// let and const hoist the variable declaration to the top of the scope, but the initialization is not hoisted.
// This behavior is due to the temporal dead zone (TDZ) for let and const.
// This is a way to declare the variable on top of code and to use it later in the code.