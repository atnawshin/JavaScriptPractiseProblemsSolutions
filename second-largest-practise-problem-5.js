const array = [2, 5, 4, 8, 9, 3];
let firstLargest = array[0];
let secondLargest = array[0];
for (let i = 0; i < array.length; i++) {
    if (firstLargest < array[i]) {
        secondLargest = firstLargest;
        firstLargest = array[i];
    }
    else if (secondLargest < array[i]) {
        secondLargest = array[i];
    }
}
console.log(secondLargest);