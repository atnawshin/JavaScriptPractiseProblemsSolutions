const array = [12, 5, 854, 88, 4, 94];
let temp = array[0];
for (let i = 0; i < array.length; i++){
    if (array[i] < temp) {
        temp = array[i];
    }
}
console.log(temp);
