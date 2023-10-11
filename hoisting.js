// print5();
// print10();
price101();
// for (var i = 0; i < 5; i++){ //baire theke i er man pabe because of hoisting
for (let i = 0; i < 5; i++) {
    //console.log(i);
}
// console.log(i);

function print5() {
    console.log('inside',5);
}

const print10 = function () {
    console.log('inside',10);
}

var price101 = function () {
    console.log('10');
}