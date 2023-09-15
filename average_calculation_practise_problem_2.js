var numberOfMath = 75.25;
var numberOfBiology = 65;
var numberOfChemistry = 80;
var numberOfPhysics = 35.45;
var numberOfBangla = 99.50;

var totalNumber = (numberOfMath + numberOfBiology + numberOfChemistry + numberOfPhysics + numberOfBangla);

var numberOfSubjects = 5;

var average = (totalNumber / numberOfSubjects);

average = average.toFixed(2);

console.log(average);