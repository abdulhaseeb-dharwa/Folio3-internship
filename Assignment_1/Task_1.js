// Task 1: Closures
// Description: Write a function createCounter that uses a closure to create a counter.
// Requirements:
// The function createCounter should return an object with two methods: increment and getValue.
// increment should increase the counter value by 1.
// getValue should return the current counter value

function createCounter() {
    let counter = 0;
    return {
        increment: function () {
            counter++;
        }
        , getValue: function () {
            return counter;
        }
    }
}

const days = createCounter();
console.log(days.getValue());
days.increment();
days.increment();
console.log(days.getValue());