class Person {
    constructor(name, age) {
        // instances
        this.name = name;
        this.age = age;
    }
    // method
    sleep() {
        console.log(`sleeping now ${this.name}`);
        // using this will enable to use the property or method of the same class
    }
    activity() {
        this.sleep();
    }
}
// class theke obj create korte mew keyword must use korte hobe
const kodom = new Person('Kodom Ali', 21);
console.log(kodom);
kodom.sleep();
const badam = new Person('Kacha badam', 23);
badam.sleep();

/* // special case
const lazy = badam.sleep;
lazy(); */