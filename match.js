const numbers = [45, 65, 23, 98, 19];
// for (let i = 0; i < numbers.length;i++)
// {
//     const number = numbers[i];
//     console.log(number);
// }

for (const number of numbers) {
    // console.log(number);
}

const products = [
    { id: 1, name: 'xiaomi phone one night', price: 19000 },
    { id: 2, name: 'iphone', price: 19000 },
    { id: 3, name: 'mac book air', price: 119000 },
    { id: 4, name: 'Lenovo yoga laptop 2015', price: 19000 },
    { id: 5, name: 'Dell inspiron laptop 2025', price: 19000 },
    { id: 6, name: 'Samsung phone note 7', price: 19000 },
    { id: 7, name: 'Nokia old age phone gone', price: 19000 },
    { id: 8, name: 'Phone one', price: 19000 }
];

// for (const product of products) {
//     console.log(product);
// }
function matchProducts(products, search) {
    const matched = [];
    for (const product of products) {
        // console.log(product.name.includes(search));
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;

}

const result = matchProducts(products,'phone');
console.log(result);