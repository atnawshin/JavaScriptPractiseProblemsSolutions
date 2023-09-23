function average(arr) {
    let temp = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        temp = sum / arr.length;
    }
    return temp;
}
const array = [2, 5, 4, 8, 9, 3];
const avg = average(array);
console.log(avg);