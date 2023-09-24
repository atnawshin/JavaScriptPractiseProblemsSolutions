function mindGame(x) {
    // validation
    if (typeof x !== 'number' || x <= 0) {
        return 'Please provide a positive number.'
    }
    else {
        const result = (((x * 3) + 10) / 2) - 5;
        return result;
    }

    // if (typeof x !== 'number') {
    //     return "Please enter a valid number."
    // } else if (x <= 0) {
    //     return "Please provide a positive number."
    // } else {
    //     const result = (((x * 3) + 10) / 2) - 5;
    //     return result;
    // }

}
console.log(mindGame(5));