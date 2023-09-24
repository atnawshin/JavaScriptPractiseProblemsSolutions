// Recursive function - calls it self
// 5 = 1+2+3+4+5
// 1 -> 5 + sumOfN(4)
// 2 -> 5 + 4 + sumOfN(3)
// 3 -> 5 + 4 + 3 + sumOfN(2)
// 4 -> 5 + 4 + 3 + 2 + sumOfN(1)
// 5 -> 5 + 4 + 3 + 1

function sumOfN(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumOfN(n - 1);
    }
}

const n = 5;
console.log(sumOfN(n));