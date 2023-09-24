function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please enter a number."
    } else {
        const result = number * number * number;
        return result;
    }
}

console.log(cubeNumber(3));