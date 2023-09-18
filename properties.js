var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25
}
// when you know a specific property name, use dot notation to get the property value 
var penCount = shoppingCart.pen;
// alternative system
// when you know a specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

// var properties = Object.keys(shoppingCart)
// var propertyValues = Object.values(shoppingCart);

// console.log(properties);
// console.log(propertyValues);

var propertyName = 'mouse';
var propertyValues = shoppingCart[propertyName];
console.log(propertyName,propertyValues)
// console.log(shoppingCart);
// console.log(penCount);



// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
