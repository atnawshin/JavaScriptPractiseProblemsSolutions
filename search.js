const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tomaybolte parini. kala kala sada sada rong jomeche sada kala.'
// const doseExist1 = lyrics.includes('pakhi');
// const doseExist2 = lyrics.includes('pokhi');
// console.log(doseExist1,doseExist2);
const searchString = 'KALA kala';
const lyricsLowerCase = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyricsLowerCase); 


//............................
// indexOf

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tumi'));
if (lyrics.indexOf('sada') !== -1) {
    // that means 'sada' is there.
    console.log('exists in the string')
}
else {
    // that means 'sada' is not there.
    console.log('cannot find it!')
}

// starts with
console.log(lyrics.startsWith('tumi'));

// ends with
const fileName = 'mybiodata.pdf';
const otherwise = 'mypics.png';
console.log(fileName.endsWith('.pdf'));