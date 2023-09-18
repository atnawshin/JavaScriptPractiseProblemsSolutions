function make_avg() {
    var arr = [10, 20, 30];
    var arrLength = arr.length;
    var sum = 0;
    for (var i = 0; i < arrLength; i++) {
        sum = sum + arr[i];
        var avg = sum / arrLength;
    }
    return avg;
}
var average = make_avg();
console.log(average);

