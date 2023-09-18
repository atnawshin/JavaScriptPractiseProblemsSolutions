function add(num1, num2) {
    // console.log(num1, num2);
    var sum = (num1 + num2);
    // console.log(sum);
    return sum;

}
var total = add(18, 2);
// console.log(total);


function bringSingara(money) {
    var singaraPrice = 10;
    var quanitny = money / singaraPrice;
    return quanitny;
}
var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Eating singaras:', singaras)
