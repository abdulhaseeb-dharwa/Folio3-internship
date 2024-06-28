// Task 6: Variable Scopes
// Description: Write a function variableScopeTest to demonstrate the difference between global, function, and block scopes.
// Requirements:
// Define variables in global, function, and block scopes.
// Log the variables to demonstrate their accessibility in different scopes.


//Defination:
//Global Scope: Variables declared outside of any function are in the global scope.
//Function Scope: Variables declared inside a function are in the function scope.
//Block Scope: Variables declared inside a block are in the block scope.

var globalVariable = "I am in global scope";

function functionScope() {
    var functionVariable = "I am in function scope";
    console.log(functionVariable);
    {
        //block scope
        console.log('BLCOCK SCOPE:')
        var blockVariable1 = "I am in block scope";
        let blockVariable2 = "I am in block scope";
        const blockVariable3 = "I am in block scope";
        console.log(blockVariable1); //Accessible
        console.log(blockVariable2); //Accessible
        console.log(blockVariable3); //Accessible
        console.log(functionVariable); //Accessible
        console.log(globalVariable); //Accessible
    }
    //function scope
    console.log('FUNCTION SCOPE:')
    console.log(blockVariable1); //Accessible
    //console.log(blockVariable2); //Not Accessible
    //console.log(blockVariable3); //Not Accessible
    console.log(functionVariable); //Accessible
    console.log(globalVariable); //Accessible
}

console.log('GLOBAL SCOPE:')
// console.log(blockVariable1); //Not Accessible
// console.log(blockVariable2); //Not Accessible
// console.log(blockVariable3); //Not Accessible
// console.log(functionVariable); //Not Accessible
console.log(globalVariable); //Accessible

functionScope();
