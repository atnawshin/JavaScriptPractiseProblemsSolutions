function printDetails(person) {
    if (typeof person !== 'object') {
        return "Please enter a valid object."
    } else {
        const name = person.name || 'nai';
        const age = person.age || 'nai';
        const email = person.email  || 'nai';
        const car = person.car || 'nai';
        
        return "amar nam "+name + ".amar boyos "+age + ".amar email "+email + ".amar car "+car;

        // console.log(name, age, email, car);
    }
}

const obj = {
    name: 'Joye',
    age: '26',
    email: 'joye@gmail.com'
}

console.log(printDetails(obj));