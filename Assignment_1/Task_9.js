// Task 9: Shallow Cloning
// Description: Write a function shallowClone that creates a shallow clone of an object.
// Requirements:
// Use the spread operator (...) or Object.assign to create a shallow copy of the given object.
// Demonstrate the behavior of shallow cloning with nested objects.

function shallowClone(obj){
    return {...obj};
}

const original_obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

const clone_obj = shallowClone(original_obj);

console.log(original_obj);
console.log(clone_obj);

//Updating clone object
clone_obj.c.d = 5;
console.log(original_obj);
console.log(clone_obj);