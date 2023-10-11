/* 
8 ways to get undefined
1. variable that is not initialized will give undefined
2. if a function explicitly doesn't return anything then it'll return undefined - function with no return
3. parameter that is not passed will be undefined
4. If return has nothing on the right side will return undefined 
5. Property that doesn't exist on an object will give you undefined 
6. Array elements outside of the index range
7. Deleting an element inside an array
8. set a value directly to undefined
*/

// case 1
/* let a;
console.log(a); */

// case 2
/* function second(a, b) {
    const total = a + b;
}
console.log(second(2, 3)); */

// case 3
/* function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a,b,c,d);
}
third(2,5); */

//case 4
/* function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
console.log(noNegative(2,-5)) */

// case 5
/* const fifth = { id: 2, name: 'ponchom', age: 40 };
console.log(fifth.age,fifth.salary); */

// case 6
/* const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[200]); */

// case 7
/* const sixth = [4, 89, 87, 56, 54];
delete sixth[1]; //shouldn't be done like this as it makes a hole in an array, instead use splice
console.log(sixth[1], sixth[5], sixth[200]);
console.log(sixth); */

// case 8
const eighth = undefined; //shouldn't do it like this
const ninth = null; // instead do this 
const data = { results: [], updated: null };
// kono ekta data set kora hoynai bujhaite define kora hoy null diye

// console.log(typeof undefined);
console.log(typeof null);