function isGiven(number) {
    const difference = number - 7
    // validation
    if (typeof number !== 'number') {
        return 'Please enter a number';
    }
    else {
        if (difference < 7) {
            return difference;
        }
        else {
            return number * 2;
        }
    }
    
}
console.log(isGiven(15));
console.log(isGiven('jsg'));