const fruits = ["apple", "banana", "orange", "mango", "kiwi", "grapes"];

// LENGTH OF ALL THE FRUITS CHARACTERS COMBINED
let totalLength = 0;
for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];

    totalLength += fruit.length; // totalLength = totalLength + fruit.length;
}
console.log("Total Fruits Length is: ", totalLength);

console.log("================\n");

// See the concept of reduce function
fruits.reduce((previous, current, index) => {
    console.log(previous, current, index);

    return current;
});

console.log("================\n");

const totalLength_2 = fruits.reduce((previous, current, index) => {
    console.log(`${previous}, ${current}(${current.length})`);

    return previous + current.length;
}, 0);

console.log("Total Fruits Length is: ", totalLength_2);

console.log("================\n");

const totalLength_3 = fruits.reduce((previous, current) => previous + current.length, 0);

console.log("Total Fruits Length is: ", totalLength_3);

console.log("================\n");
