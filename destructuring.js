//object destructing 
const actor = {
    name: 'Ananta',
    age: 30,
    phone: '1070858745',
    money: 984324525748
}
// if right side is an object left side of destructuring will be object as well
//use property name as a variable that contains the property value
const { phone,age:boyosh } = actor;
console.log(phone, boyosh)

// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
const[x, y] = [12, 64];

// 
function doubleThem(a, b){
    return [a * 2, b * 2];
}
const [first2, second2] = doubleThem(6, 9);
console.log(first2, second2);