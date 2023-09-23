const result = Math.pow(3, 8); //3^8
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
if (gap < 5) {
    // console.log('You guys can be friends.');
}
else {
    // console.log('You guys stay apart');
}

// ....................
//
//.....................
const number = 2.487465;
const fullNumber = Math.round(number); //it will round the number
// console.log(fullNumber);

const result2 = Math.ceil(2.0000001); //will take the 
const result3 = Math.floor(456.9999999);
// console.log(result2);
// console.log(result3);

//.............
// Random
// console.log(Math.random() * 100); //by default returns a random number between 0 to 1
// console.log(Math.round(Math.random() * 100));
//
// using for loop
for (let i = 0; i < 20; i++){
    console.log(Math.round(Math.random() * 6));
    //chokka
}