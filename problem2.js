function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please enter a valid string."
    } else {
        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    }
}


const str1 = 'Peter Parker';
const str2 = 'Pet';
console.log(matchFinder(str1, str2));









/* 
const letterOfString1 = string1.split('');
// console.log(letterOfString1);

const letterOfString2 = string2.split('');
// console.log(letterOfString2);

// if (letterOfString1 === letterOfString2) {
if (string1 === string2) {
    return true;
} else {
    return false;
} */