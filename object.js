// object
var student = {
    id: 115,
    name: 'Salman Khan',
    class: '9',
    marks: '98'
}
var mobile = {
    // properties/characteristics 
 // keys  : values
    brand: 'SAMSUG',
    price: 19000,
    storage: '64GB',
    camera: '7MP'
}
var myComputer = {
    brand: 'Lenovo',
    price: 390000,
    color: 'silver',
    processor:'i7'
}
// console.log(myComputer.brand);
// console.log(mobile.brand);
console.log(myComputer.processor);
myComputer.processor = 'i79';
console.log(myComputer);

var propertyKeys = Object.keys(myComputer);
var propertyValues = Object.values(myComputer);
console.log(propertyKeys)
console.log(propertyValues)