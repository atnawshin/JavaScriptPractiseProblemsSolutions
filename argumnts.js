function sum(a, b, c) {
    // console.log(arguments[4]);
    // console.log(typeof arguments);

    // converting arguments to array
    const args = [...arguments];
    console.log(args);

    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(sum.length);