function reverseString(text) {
    const textLength = text.length;
    // for (let i = 0; i < text.length;i++){}
    let reversed = '';
    for (let i = textLength-1; i >= 0; i--){
        const index = i;
        const element = text[index];
        reversed = reversed + element;
        console.log(element,reversed);
    }
    return reversed;
}
const myString = 'I am a good girl';
const reversed = reverseString(myString);
console.log('reversed output: ', reversed);