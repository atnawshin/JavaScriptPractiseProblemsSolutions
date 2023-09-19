function isEven(num) {
    const remainder = num % 2;
    if (remainder === 0)
        // console.log('Number is Even');
        return true;
    else
        // 
        return false;

    /* if (num % 2 === 0) {
        return true;
    }
    else
        return false; */
}

const theNumberisEven = isEven(177);
console.log(theNumberisEven);
// const number = isEven(98);
// console.log(number);
