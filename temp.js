let first = 5;
let second = 7;
console.log(first, second);
// first = second;
// second = first;

// approach 1
// const temp = second;
// second = first;
// first = temp;

// approach 2 -------- Destructuring
// array to 
[first, second] = [second, first];
console.log(first, second);
