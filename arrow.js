//function declaration
/* function add(a, b) {
    const result = a + b;
    return result;
} */

// function expression
const add2 = function (a, b) {
    return a + b;
}


function add(a, b) {
    return a + b;
}

// arrow function
const add3 = (a, b) => a + b;   //return likhte hoy na

const sum = add(5, 90);
console.log(sum);

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4
const sum2 = add4(1, 2, 3, 4);
console.log(sum2);

const multiply = (nm1, nm2) => nm1 * nm2;
const mul = multiply(2, 3);
console.log(mul);