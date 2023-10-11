const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
];
const output = instructor.filter(employee => employee.position === 'Senior').map(seniorEmployee => seniorEmployee.name);

console.log(output);