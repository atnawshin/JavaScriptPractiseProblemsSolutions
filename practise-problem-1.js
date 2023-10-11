const array = [1, 3, 5, 7, 9];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const even = element + 1;
    console.log(even);
}
const arrowEven = array.map(num => num + 1);
console.log(arrowEven);