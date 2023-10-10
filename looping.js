const numbers = [1, 6, 8, 4];
// for (let i; i < number.length;i++){}
//while

for (const number of numbers) {
    console.log(number);
}
const nobab = 'Shiraj Ud Doula';
for (const char of nobab) {
    console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    inCleaned: true
}

for (const key in glass) {
    console.log(key);
}
for (const key in glass) {
    const value = glass[key];
    console.log(key,value);
}

//optional
const keys = Object.keys(glass);
console.log(keys);
for (const key of keys) {
    const value = glass[key]; //dot diye kaj hobe na kron eta array
    console.log(key,value);
}