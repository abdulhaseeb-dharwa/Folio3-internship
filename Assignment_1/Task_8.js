// Task 8: Functions
// Description: Write a function calculateArea that takes the radius of a circle as an argument and returns the area.
// Requirements:
// Use a function declaration to define calculateArea.
// Use the formula area=π×radius2\text{area} = \pi \times \text{radius}^2area=π×radius2 to calculate the area.
// Call the function and log the result.

function calculateArea(radius){
    return Math.PI * radius**2;
}

console.log(calculateArea(5));