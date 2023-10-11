//foreach doesn't return anything
const numbers = [1, 5, 6, 4, 15];
const result = numbers.forEach(n => console.log(n));

const result1 = numbers.forEach(n => {

});
console.log(result, result1); //will give undefined

