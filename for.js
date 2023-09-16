// for loop

// var roastGiven = 0;
// while (roastGiven < 7) {
//     console.log("Roast please....");
//     roastGiven++;
// }

/* for (var roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log("Roast please....")
} */

// simple version of for loop
/* for (var i = 0; i < 7; i++){
    console.log(i);
} */

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

// sum of numbers
sum = 0;
for (var i = 1; i <= 20; i++) {
    // console.log(i);
    sum = sum + i;
}
console.log("Sum of numbers : ", sum);


// i+=2 means i = i+2
// even numbers
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}

// sum of even numbers
sum = 0;
for (var i = 0; i <= 20; i += 2) {
    sum = sum + i;
    // console.log(i);
}
console.log("Sum of even numbers : ", sum);


// odd numbers
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// sum of odd numbers
sum = 0;
for (var i = 1; i <= 20; i += 2) {
    sum = sum + i;
    // console.log(i);
}
console.log("Sum of odd numbers : ", sum);