// convert-hours-to-minutes-to-seconds
// convert-hours-to-minutes
function convertHoursToMinutes(hours) {
    const minuteTotal = hours * 60;
    return minuteTotal;
}

const hours = 1;
const totalMinutes = convertHoursToMinutes(hours);
console.log(hours, 'hours becomes', totalMinutes, 'minutes');

//convert minutes to seconds
function minToSec(min) {
    const totalSeconds = min * 60;
    return totalSeconds
}
const minutes = 1;
const totalSecs = minToSec(minutes);
console.log(minutes, 'minutes becomes', totalSecs, 'seconds');

//convert hours to secondes
function hrToSec(hr) {
    const totalSec = hr * 60 * 60;
    return totalSec;
}
const hrs = 1;
const totalsecs1 = hrToSec(hrs);
console.log(hrs, 'hours becomes', totalsecs1, 'seconds');

// second to hour
function secToHour(sec) {
    const hours = sec / (60 * 60);
    return hours;
}
const sec = 3600;
const totalHours = secToHour(sec);
console.log(sec, 'seconds become', totalHours, 'hours');