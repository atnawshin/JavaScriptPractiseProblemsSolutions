
// difference between Array & Object
/* var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    Rahim: 12,
    Sadman: 45,
    Karim: 78,
    Jamal: 12,
    Robi: 32,
    Kazi: 14
    } */

// object-looping
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
// object er pori likhte hobe
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName,value); 
}

// const keys = Object.keys(shoppingCart);
// console.log(keys);

// const values = Object.values(shoppingCart);
// console.log(values);

// var keys = [ 'books','sunglass','keyboard', 'mouse', 'pen','shoes']
/* for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValues = values[i];
    // console.log(propertyName,propertyValues);
} */

// easy version
// for in loop
/* for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName,value); 
} */ 