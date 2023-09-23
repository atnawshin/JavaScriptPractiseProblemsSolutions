const array = [12, 4, 6, 2, 45, 7];
const length = array.length;
array[3] = 9;
const sum = array[2] + array[5];
console.log("Old array: ", array);
array.pop();
console.log("New array: ", array);
console.log("Total items: ", length);
console.log("Sum of two items: ", sum);