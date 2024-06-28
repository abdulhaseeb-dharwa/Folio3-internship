// Task 3: Array Methods - Filter, Find, forEach
// Description: Given an array of numbers, perform the following operations:
// Filter out even numbers.
// Find the first number greater than 50.
// Log each number to the console.
// Requirements:
// Use filter to create a new array of odd numbers.
// Use find to get the first number greater than 50.
// Use forEach to log each number from the original array.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

let oddnum = arr.filter((num) => num % 2 !== 0)
console.log("Odd numbers: ",oddnum);

let firstnum = arr.find((num) => num > 50)
console.log("First number greater than 50: ",firstnum);

arr.forEach((num) => console.log(num));