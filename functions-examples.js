/* // function definition
function functionName(parameters) {
    // function body
    //return
}
// function call
var returnValue = functionName(parameters value);
// can store the return of the function in a variable for further use. */

function getAverages(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1 = 60;
const assignment2 = 58;
const assignment3 = 59;

var myAverage = getAverages(assignment1, assignment2, assignment3)
console.log('My average so far: ',myAverage)