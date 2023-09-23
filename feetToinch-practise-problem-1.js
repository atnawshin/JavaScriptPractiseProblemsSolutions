function feetToInch(feet) {
    const convertToInch = feet * 12;
    return convertToInch;
}
const feet = 12;
const inch = feetToInch(feet);
console.log(feet, 'feet turns into', inch, 'inch');