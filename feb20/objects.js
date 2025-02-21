const person = {
    name: "John",
    age: 30,
    isDeveloper: true,
};

person.age = 31;
person.location = "New York";

console.log(Object.keys(person)); // ["name", "age", "isDeveloper", "location"]
console.log(Object.values(person)); // ["John", 31, true, "New York"]
console.log(Object.entries(person)); // [["name", "John"], ["age", 31], ["isDeveloper", true], ["location", "New York"]]

// Array within an Array
// 2D Arrays
// [
//     ["name", "John"],
//     ["age", 31],
//     ["isDeveloper", true],
//     ["location", "New York"],
// ];

const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log("================\n");

// Iterate -> Looping
for (let index = 0; index < keys.length; index++) {
    const key = keys[index];

    console.log(key);
}

console.log("================\n");

for (let index = 0; index < values.length; index++) {
    const value = values[index];

    console.log(value);
}

console.log("================\n");

for (let index = 0; index < entries.length; index++) {
    const entry = entries[index]; // [ 'name', 'John' ], [ 'age', 31 ], [ 'isDeveloper', true ]

    const key = entry[0];
    const value = entry[1];

    console.log(`Entry ${entry} has ${key} with ${value}`);
}

console.log("================\n");

// Dynamic 2d array
// Arrays of Arrays
const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16],
];

const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let output_nums = [];
for (let i = 0; i < input.length; i++) {
    const elements = input[i]; // Array of numbers

    for (let j = 0; j < elements.length; j++) {
        const element = elements[j];

        output_nums.push(element);
    }
}
console.log(output_nums);
