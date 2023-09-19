function getFactorial(number) {
    let factorial = 1;
    for (let i = 2; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
const factorial = getFactorial(5);
console.log('factorial of 8 is:', factorial);


//MCQ
function print(a, b, c){

    return a+2;
   
    return a*b;
   
    return b*c+a;
   
   }
   
   console.log(print(1,2,3));