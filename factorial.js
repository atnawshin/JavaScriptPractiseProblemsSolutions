//1*2*3*4*5*6*7
// Factorial
// 3!=3*2*1  4!=4*3*2*1  5!=5*4*3*2*1
function multiplicationOfNumbers(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
        // console.log(i, result);
    }
    return result;
}
const mul = multiplicationOfNumbers(5);
// console.log(mul);

// factorial with for loop
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        let result = 1;
        for (let i = 2; i <= n; i++){
            result *= i;
        }
        return result;
    }
}
const factorialOfNumber = factorial(5);
// console.log(factorialOfNumber);

// with reverse for loop
function factorialOfNumbers(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        let result = 1;
        for (let i = n; i >= 2; i--){
            result *= i;
        }
        return result
    }
    
}
const factorialIs = factorialOfNumbers(5);
// console.log(factorialIs);

// factorial with while loop
function factoOfNum(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        let result = 1;
        let i = 2;
        while (i <= n) {
            result = result * i;
            i++;
        }
        return result;
    }
}
const num = 5
const fctoIs = factoOfNum(num);
console.log('Factorial of', num + '!', '=', fctoIs);

// factorial with reverse while loop
function factoNum(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        let result = 1;
        let i = n;
        while (i >= 2) {
            result = result * i;
            i--;
        }
        return result;
    }
}
const num1 = 5
const fctoIs1 = factoNum(num1);
console.log('Factorial of', num1 + '!', '=', fctoIs1);