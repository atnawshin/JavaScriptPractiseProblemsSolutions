function oddNumberSum(numbers) {
    let oddSum = 0;
    for (i = 0; i < numbers.length; i++){
        const oddNums = numbers[i];
        if (oddNums % 2 === 1) {
            oddSum = oddSum + oddNums;
        }
        // console.log(oddNums);
    }
    return oddSum
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];

const oddNumberSum1 = oddNumberSum(myNumbers);
console.log(oddNumberSum1);