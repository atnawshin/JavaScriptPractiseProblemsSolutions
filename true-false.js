/* 
Truthy:
1. true
2. any number(+ve,-ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {} -> empty object
6. [] -> empty array

Falsy:
1. false
2. 0
3. ''(empty string)
4. undefined
5. null
*/

// const x = false;
// const x = -4;
// const x = 0;
// const x = 'any string';
// const x = '';
// const x = ' '; //space thakleo truthy hobe
// const x = '0'; //becomes a string
// const x = 'false'; //becomes a string 
// let x;
// let x = null;
// let x = {};
// let x = { a: 5, b: 56 };
let x = [];
console.log(x);
if (x) {
    console.log('value of x is truthy.')
} else {
    console.log('value of x is falsy.')
}

// optional
// check falsy
// const y = '';
const y = null;
if (!y) {
    console.log('value is falsy');
}

// check truthy
const z = ' ';
if (!!z) {
    console.log('Value is truthy.');
}