//default --> if value is not provided, take this a a value. 
function add(num1 = 99, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5, 7);  
// const sum = add(7);  
// const sum = add(2,3);  
const sum = add(1, 2);  