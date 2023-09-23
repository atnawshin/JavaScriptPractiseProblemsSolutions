// word reverse
/* function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    for (let i = words.length - 1; i >= 0; i--){
        const elements = words[i];
        result.push(elements);
    }
    const reversed = result.join(' ');
    return reversed;
    // console.log(words);
}

const myString = 'I am a good girl';
console.log(reverseWords(myString)); */
// const reversedWords = reverseWords(myString);
// console.log(reversedWords);



function reversedWords(str) {
    const words = str.split(' ');
    // console.log(words);
    let result = [];
    // [ 'I', 'am', 'a', 'good', 'girl' ]
    for (let i = words.length - 1; i >= 0; i--){
        const elements = words[i];
        result.push(elements);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myString = 'I am a good girl';
// console.log(reversedWords(myString));
console.log(reversedWords(myString));