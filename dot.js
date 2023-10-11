const person = {
    name: 'Kodom ALi',
    job: 'badam khai',
    3: 'third',
    'add-dress': 'kochu khet'
}
console.log(person.job);
console.log(person['job']);

const prop = 'job';
console.log(person[prop]);

console.log(person['3']);
console.log(person['add-dress']);

// what will be the output?

function min(nums) { return Math.min(...nums) }
console.log(min([1, 3, 2]));

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);