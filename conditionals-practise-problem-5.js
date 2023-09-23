const weekday = true;
const weekend = true;
const raining = true;
const leave = false;
if (weekend === true && raining === true) {
    console.log("I'll eat bhuna khichuri...");
} else {
    console.log("I'll eat regular food...");
}

if (weekday === true || raining === false) {
    console.log("Don't need to carry an umbrella.");
} else {
    console.log("Need to carry an umbrella.");
}

if (weekend === true && raining === true || leave == true) {
    console.log("Enjoy the time as much as you can.");
}
else {
    console.log("No time for enjoyment")
}