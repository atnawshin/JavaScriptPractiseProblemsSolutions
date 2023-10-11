// primitive types are passed by value -> function er bhitorechange korleo change hobe na
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);
const output = multiply(num1, num2);
console.log(num1);


// object and array are passed by reference 
let student1 = { name: 'Jalil', partner: 'Borsha' };
let student2 = { name: 'Raj', partner: 'Anika' };

function makeMovie(couple1, couple2) {
    couple1.name = 'Ononto';
    couple2.partner = 'Mim';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);

let p = 'Javascript';
let q = p;
p = 'React';
console.log(q);

const sum = (p, q) => {
    p + q;
}
const result = sum(2, 3);
console.log(result);

if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
}
   
function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));