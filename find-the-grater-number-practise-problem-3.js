// find the largest number

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2){
    if (num1 > num3) {
        console.log("The largest number is : ", num1);
    }
    else {
        console.log("The largest number is : ", num3);
    }
}
else if (num2 > num3) {
    console.log("The largest number is : ", num2);
}
else {
    console.log("The largest number is : ", num3);
}