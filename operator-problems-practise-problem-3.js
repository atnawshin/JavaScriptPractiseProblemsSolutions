function add(num1, num2) {
    const addition = num1 + num2;
    return addition;
}

function sub(num1, num2) {
    const subtraction = num1 - num2;
    return subtraction;
}

function mul(num1, num2) {
    const multiplication = num1 * num2;
    return multiplication;
}
function div(num1, num2) {
    const division = num1 / num2;
    return division;
}
function mod(num1, num2) {
    const remainder = num1 % num2;
    return remainder;
}

const number1 = 12;
const number2 = 4;
console.log(add(number1, number2));
console.log(sub(number1, number2));
console.log(mul(number1, number2));
console.log(div(number1, number2));
console.log(mod(number1, number2));