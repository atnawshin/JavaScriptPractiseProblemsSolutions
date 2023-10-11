function add(a, b) {
    // -----------function scope start-----------
    const total = a + b;
    //console.log(total);
    if (b > 5) {
        // ----------block scope start--------
        const sum = 25 + a + b;
        // ----------block scope end-----------
    }
    else {
        const sum = 5 + a + b;
        var current = sum;
    }
    //console.log(sum);
    console.log(current);
    return total;
    // ----------function scope end--------------
}
// console.log(total);
// console.log(a, b);
add(5, 3);