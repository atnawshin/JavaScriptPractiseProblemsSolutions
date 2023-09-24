function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Please insert values to the array.";
    } else {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            item = changeArray[i];
            sum = sum + item;
        }
        if (sum >= totalDue) {
            return true;
        } else {
            return false;
        }
    }
}

// console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 2, 5], 10));