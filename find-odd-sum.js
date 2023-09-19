function getSumOfAnArray(numbers) {
    let sum = 0; //const deya jabena as it'll change ar loop er baire declear korar karon holo bhitore dile bar bar reset hoye jeto ager alue store korto na. ager value store kore porer tar sathe jog korar jonno sum baire likhse
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum = sum + elements
        // console.log(index, elements, sum);
    }
    return sum; //loop er baire dite hobe karon eta ekbar paile loop ar cholbe na
}

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if (elements % 2 !== 0) {
            console.log(index, elements);
            oddNumbers.push(elements);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum:',oddNumberSum)