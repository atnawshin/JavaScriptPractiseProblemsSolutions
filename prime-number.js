// prime number
// 1 & 2 both are prime numbers
// 0 & 1 baad
// condition: oi number & 1 chara ar kisu diye nisheshe divide hoy na

function findPrimeNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Please provide me an array of numbers."
    } else {
        let primes = [];
        for (let item of arr) {
            if (item > 1) {
                let isPrime = true;

                for (let i = 2; i < item; i++) {
                    if (item % i === 0);
                    isPrime = false;
                    break;
                }
                if (isPrime === true) {
                    primes.push(item)
                }
            }
        } return primes;
    }
}

const numbers = [4, 7, 8, 11, 9, 2, 10];
console.log(findPrimeNumbers(numbers));