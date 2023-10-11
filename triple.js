/* 
1. always use ===
2. equal comparison doesn't work for non-primitive type
*/

/* const first = 1;
const second = true;
if (first == second) {
    console.log('Values are equal');
}
else {
    console.log('Values not are equal');
} */
// type coercion
// type conversion
// typecasting

// const first = { x: 5 };
// const second = { x: 5 };


// for non-primitive they check reference not value. as first and second point different references so the output will be not equal.
// const first = [];
// const second = [];

// for non-primitive variables if we set them to another variable then both of them points in the same place which will result into equal. here first and second will point the same memory address.
const first = [];
const second = first;

if (first === second) {
    console.log('Values are equal');
}
else {
    console.log('Values not are equal');
}