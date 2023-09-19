const myInches = 144;
const myFeet = myInches / 12;
console.log(myFeet);

// with function
function convertToFeet(inchs) {
    const feet = inchs / 12;
    return feet;
}
const inchs = convertToFeet(144);
console.log(inchs);

function mileToKilo(miles) {
    const toKilo = miles * 1.60934;
    return toKilo;
}
const kilo = mileToKilo(2);
console.log(kilo)