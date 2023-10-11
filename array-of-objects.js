const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'Dell', price: 45000 },
    { id: 3, name: 'HP', price: 45000 },
    { id: 4, name: 'MAC', price: 150000 },
]

//map
const names = products.map(product => product.name);
const prices = products.map(product => product.price);
// console.log(names);
// console.log(prices);

// just to see the products names it won't return anything
// products.forEach(p => console.log(p.id));

// filter
const expensive = products.filter(products => products.price > 50000);
// console.log(expensive);


// find
const affordable = products.find(p => p.price < 50000);
console.log(affordable);

// reduce
const total = products.reduce((a, c) => a + c.price, 0);
console.log(total);