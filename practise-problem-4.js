const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
]

sum = 0;
for (let i = 0; i < people.length; i++) {
    const ppl = people[i].age;
    sum = sum + ppl;
}
console.log(sum);

const ageSum = people.reduce((a, c) => a + c.age, 0);
console.log(ageSum);