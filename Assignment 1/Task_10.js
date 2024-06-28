// Task 10: Deep Cloning
// Description: Write a function deepClone that creates a deep clone of an object.
// Requirements:
// Use a recursive approach or JSON.stringify and JSON.parse to create a deep copy of the given object.
// Demonstrate the behavior of deep cloning with nested objects.

function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}

const original_obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

const clone_obj = deepClone(original_obj);

console.log(original_obj);
console.log(clone_obj);

//Updating clone object
clone_obj.c.d = 5;
console.log(original_obj);
console.log(clone_obj);