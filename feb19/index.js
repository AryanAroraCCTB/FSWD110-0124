const fruits = ["apple", "banana", "orange", "mango", "kiwi", "grapes"];

// Add . at the end of every fruit
let newFruits = [];
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];

    console.log(element);

    newFruits.push(`${element}.`);
}

console.log("----------------------");

const sum = (a, b) => {
    return a + b;
};
const sum_2 = (a, b) => a + b;
sum(1, 2);

console.log("----------------------");

const x = fruits.map((element, index) => {
    console.log(element);

    return `${element}.`;
});

// Using the map function
// Input:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Output:
const multipliedNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const newNumbers = numbers.map((num, index) => {
    const newNum = num * 2;

    return newNum;
});

const newNumbers_2 = numbers.map((num) => num * 2);

// For Each
// numbers.forEach((num, index) => {
//     numbers[index] = num * 2;
// });
// console.log(numbers);

// Filter
const evenNumbers = numbers.filter((number, index) => {
    let isEven = false;
    if (number % 2 === 0) {
        isEven = true;
    }

    return isEven;
});

console.log(evenNumbers);

const oddNumbers = numbers.filter((number, index) => {
    let isOdd = false;
    if (number % 2 !== 0) {
        isOdd = true;
    }

    return isOdd;
});

const evenNumbers_2 = numbers.filter((number) => number % 2 === 0);
const oddNumbers_2 = numbers.filter((number) => number % 2 !== 0);

// Prime number: 13, 7, 5, 3, 2, 11, 17, 19, 23, 29,

// 12323912874907238956789346893489769347

// 1 - 12323912874907238956789346893489769347
// 1, 12323912874907238956789346893489769347
