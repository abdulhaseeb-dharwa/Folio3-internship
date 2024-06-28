// Task 4: Loops - For, For...in
// Description: Create a function logObjectProperties that takes an object and logs its properties and values.
// Requirements:
// Use a for loop to log numbers from 1 to 10.
// Use for...in to iterate over the properties of an object and log each property and its value.

function logObjectProperties(obj){
    for(let i=1; i<10; i++){
        console.log(i);
    }
    for (let key in obj){
        console.log(key+ ' : ' + obj[key]);
    }
}

const object = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j'
}

logObjectProperties(object);