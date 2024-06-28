// Task 7: Classes
// Description: Create a class Person with properties name and age and a method greet.
// Requirements:
// The greet method should return a greeting message that includes the person's name and age.
// Create an instance of the Person class and call the greet method

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const P = new Person('Hasbullah', 25);
console.log(P.greet());