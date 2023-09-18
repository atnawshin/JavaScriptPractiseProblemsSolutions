// has return + has parameter
/* function odd_even(num) {
    if (num % 2 === 0) {
        return ("Even");
    }
    else
    {
        return ("Odd");
    }
}
var output = odd_even(4);
console.log(output); */

// no return + has parameter
function odd_even(num) {
    if (num % 2 === 0) {
        console.log("Even");
        return
    }
    else {
        console.log("Odd");
        return
    }
}
odd_even(3)