// #template String
const a = 56;
const numbers = [12, 45, 75, 8];
const person = {
    name: 'Jhon Doe'
}
const message = `Hi, ${person.name} has ${a} access to ${numbers[2]}`;
console.log(message);

// arrow function
// const arrowFunction = x => Math.pow(x, 2);
const arrowFunction = x => x * x;
console.log(arrowFunction(2));

const sum = (a, b) => a + b;
console.log(sum(2, 3));

// destructuring & spread 
const { age, z, ...others } = { x: 2, y: 5, z: 3, name: 'Jhon Doe', age: 55 };
console.log(age, z, others);
const output = `Age: ${age}
z: ${z}`;
console.log(output)
const [first, second, ...remaining] = ['ram', 'sham', 'jodu', 'modhu'];
console.log(first, second, remaining);

// Object.keys Object.values both are not a part of ES6
// Object.entries is a part of ES6
//for of used in array and string is a part of es6
//for in loop used in object and is a part of es6



