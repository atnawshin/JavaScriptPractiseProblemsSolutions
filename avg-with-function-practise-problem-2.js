function make_avg(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var avg = total / 3;
    return avg;
}
const average = make_avg(10, 20, 30);
console.log(average);