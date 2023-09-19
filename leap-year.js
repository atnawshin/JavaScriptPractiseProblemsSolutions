// leap year
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}
const isThisYearLeapYear = isLeapYear(1600);
console.log(isThisYearLeapYear);




































/* function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        // console.log('Your year is leap year', year);

        // to store the return value outside of the function for further use we should give a return statement
        return true;
    }
    // else {
        return false;
    // } //else na likhleo hoy
    console.log('Your year is not leap year', year);
        
}

const isMyYearLeapYar=isLeapYear(1933);
console.log("my year",isMyYearLeapYar) */