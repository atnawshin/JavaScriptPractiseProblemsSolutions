// strongly typed language where the type of the variable should be defined
// JS is dynamic type language where variable type shouldn't be mentioned

//primitive type
const a = 5;
const b = 'some string';
const c = true;

//non-primitive type 
const ages = [45, 76, 43];
const student = { id: 23, class: 7 };
//console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7; //reassigned the value
console.log(x, y);

let p = { job: 'web developer' };
let q = p;
console.log(p, q);
// q = { job: 'backend developer' };
q.job = 'frontend developer'; 
console.log(p, q);