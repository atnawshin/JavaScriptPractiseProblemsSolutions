let positiveNumbers = [];
let negativeNumbers = [];
function positiveReturnOnly(arr) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positiveNumbers.push(array[i]);
        }
        else
            break
        // negativeNumbers.push(array[i]);
        // console.log(array[i],i);
    }
    return positiveNumbers;
}
const array = [1, 5, 36, 7, -4, 56, -3, -9, 0, 35];
const positiveNumbersArray = positiveReturnOnly(array);
console.log("Positive number's array:", positiveNumbersArray);
// console.log("Negative number's array:", negativeNumbers);