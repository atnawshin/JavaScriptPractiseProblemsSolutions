// finding max among three numbers
function findMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else
        return num3;
}

console.log(findMax(980, 907, 808));
console.log(Math.max(980, 907, 808))

// finding min among three numbers
function findMin(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else
        return num3;
}

console.log(findMin(980, 907, 808));
console.log(Math.min(980, 907, 808))