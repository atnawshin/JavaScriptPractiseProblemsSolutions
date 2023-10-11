// data access for data chain
const data = [{ id: 1, name: 'Abul', address: 'kochu khet' }];
console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'Lenovo Laptop', price: 65000 },
        { id: 2, name: 'MacBook', price: 165000 },
    ]
}
// second product price
console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'Jhon Doe',
    address: {
        street: {
            first: '54/1 uttora side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.second);

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
console.log(user.address.street?.second);
console.log(user2.address.street?.second);
