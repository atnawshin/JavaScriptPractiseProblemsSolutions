function centimeterToMeter(centimeter) {
    const convertedToMeeter = centimeter / 100;
    return convertedToMeeter;
}
const centimeter = 1000;
const meeter = centimeterToMeter(centimeter);
console.log(centimeter, 'centimeter turns into', meeter, 'meter')