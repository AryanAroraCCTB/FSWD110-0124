const country = "CANADA";

console.log(country.toLowerCase());
console.log(country.toUpperCase());

console.log(country.includes("ANA"));
console.log(country.includes("A"));
console.log(country.includes("F"));

console.log("================\n");

const first_three_leters = country.slice(0, 3);
console.log(first_three_leters);

console.log("================\n");

const csv = "apple, banana, cherry, dragonfruit";
console.log(csv);

const fruits = csv.split(",");
console.log(fruits);

console.log("================\n");

const city = "VANCOUVER, ON";
console.log(city);

const updatedCity = city.replace("ON", "BC");
console.log(updatedCity);

console.log("================\n");
