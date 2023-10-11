const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'Dell', price: 45000 },
    { id: 3, name: 'HP', price: 45000 },
    { id: 4, name: 'MAC', price: 150000 },
]

// has some properties or attributes, method
/* class Product{
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

const lenovo =new Product('le le lenovo');
console.log(lenovo);
lenovo.speak('Tell something'); */


class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir is teaching Math.');
    }
}

//instances
const tapan = new Teacher('Taopn sir', 'Physics');
console.log(tapan);

const rashid = new Teacher('Rashid sir', 'English');
console.log(rashid);
