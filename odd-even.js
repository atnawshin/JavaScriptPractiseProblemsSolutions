// even numbers

var number = 0;
while (number <= 10) {
    console.log(number);
    number = number + 2;
}

// odd numbers
var number = 1;
while (number <= 10) {
    console.log(number);
    number = number + 2;
}

// sum of n numbers
var number = 0;
var sum = 0;
while (number <= 10) {
    // console.log(number);
    sum = sum + number;
    number++;
}
console.log("Sum of numbers: ",sum);

// sum of even numbers
var number = 0;
var sum = 0;
while (number <= 10) {
    // console.log(number);
    sum = sum + number;
    number += 2;
}
console.log("Sum of even numbers: ",sum);

// sum of odd numbers
var number = 1;
var sum = 1;
while (number <= 10) {
    // console.log(number);
    sum = sum + number;
    number += 2;
}
console.log("Sum of odd numbers: ",sum);
