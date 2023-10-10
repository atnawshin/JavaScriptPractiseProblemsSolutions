const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
console.log(glass);
const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const pair = Object.entries(glass);
console.log(pair);
// 2D array / array of array
/* [
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
  ] */

//delete glass.isCleaned
delete glass.isCleaned;
console.log(glass);

const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass);

// freeze = don't allow any change
//Object.freeze(glass);
//glass.source = 'Bangladesh';
//console.log(glass)

// seal
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 50000;
console.log(glass);
