//var : no reason to use var
//let : allow it to reassign
//const : do not allow it to reassign

const money = 25;
// money = 31; //can't do that as it's a constant variable so you can't update the value
const rich = money + 26;
console.log(rich);

let count = 10;
count = count + 10;
console.log(count);

const numbers = [23, 45, 37, 83, 86, 34];
// numbers = [1, 24, 5]; //can't assign full array again in a constant variable but you can change the inside items
numbers[2] = 43;
numbers.push(2, 5, 7, 3);
console.log(numbers);

// object
const student = {
    name: 'moyna',
    class: 12
}
student.name = 'kokil'
console.log(student);
/* student = {
    name: 'kokil'
}; */ //can't do this as it's a constant variable

//loop
// const sum = 0;
let sum = 0;
for (let i = 0; i < 10; i++) {
    const num = i;
    sum = sum + num;
}
console.log(sum);