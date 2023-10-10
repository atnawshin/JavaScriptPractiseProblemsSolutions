const difference = (a, b) => a - b;
const multiply = (first, second, third) => first * second * third;

// get object element
const getAge = (person) => person.age;
const student = { name: 'Ananta', age: '45' };
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[3];
const third = getThird([12, 4, 53, 66, 36, 7, 3]);
console.log(third);

// no parameter
const getPi = () => Math.PI;
console.log(getPi());

// large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}
console.log(doMath(2, 3, 5));