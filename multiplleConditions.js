var isGraduate = true;
var salary = 250000;
var cars = 1;

// if (isGraduate === true) {
//     console.log("Congratulations!")
// }
// else {
//     console.log("Will congratulate you later.")
// }

// if (isGraduate === true && salary > 50000 && cars >=1) {
//     console.log("Congratulations! You are successful.");
// }
// else {
//     console.log("Will congratulate you later.");
// }

// if (isGraduate === true || salary > 50000 || cars >=1) {
//     console.log("Congratulations! You are successful.");
// }
// else {
//     console.log("Will congratulate you later.");
// }

// if ((isGraduate === true && salary > 50000) || cars >= 1) {
//     console.log("Congratulations! You are successful.");
// }
// else {
//     console.log("Will congratulate you later.");
// }


if (isGraduate === true && (salary > 50000 || cars >= 1)) {
    console.log("Congratulations! You are successful.");
}
else {
    console.log("Will congratulate you later.");
}