function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isLeapYear(2013));

function filteredYears(yearsArray) {
    const leapYears = [];
    for (let i = 0; i < yearsArray.length; i++) {
        if (isLeapYear(yearsArray[i]))
            leapYears.push(yearsArray[i]);
    }
    return leapYears;
}
const arrayOfYears = [2023, 2024, 2025, 2028, 2030];
const leapYear = (filteredYears(arrayOfYears));
console.log(leapYear);