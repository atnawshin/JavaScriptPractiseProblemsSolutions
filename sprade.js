const max = Math.max(16, 23, 45, 23, 89);
const numbers = [3, 5, 2, 45, 5, 90, 32, 15];
const arrayMax = Math.max(...numbers);
//console.log(...numbers); //returns only numbers from the array
console.log(arrayMax);   

// use spread operator to copy
const nums = [2, 4, 6, 7, 45];
const nums2 = [...nums]; //spared out
nums2.push(12);
console.log(nums);
console.log(nums2);

//advanced
const nums3 = [...nums, 9886947]; //add extra elements while copying
console.log(nums3);