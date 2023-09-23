const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tomaybolte parini. kala kala sada sada rong jomeche sada kala.'
const parts = lyrics.split(' '); //will split the sentence in regards of space.
const sentence = lyrics.split('.'); //will split the sentence in regards of 'full stop'.''.
const chars = lyrics.split('');
// console.log(chars);
// console.log(parts);
// console.log(sentence);


// slicing
//    starting index || index before stop
const partial = lyrics.slice(5, 8);
// console.log(partial);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines3 = [
    'tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomaybolte parini',
    'kala kala sada sada',
    'rong jomeche sada kala' 
];
const newSOng = lines3.join('. ');
// console.log(newSOng)

const lines = [
    'tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomaybolte parini',
    'kala kala sada sada',
    'rong jomeche sada kala'
];


// converting the first letter of each line while joining them with '.'
let result = '';

for (let i = 0; i < lines.length; i++) {
    const words = lines[i].split(' ');
    for (let j = 0; j < words.length; j++) {
        if (j === 0) {
            result += words[j].charAt(0).toUpperCase() + words[j].slice(1);
        } else {
            result += ' ' + words[j];
        }
    }
    if (i !== lines.length - 1) {
        result += ' . ';
    }
}

console.log(result);

