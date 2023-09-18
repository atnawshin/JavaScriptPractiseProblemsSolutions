const signal = 'red';
if (signal == 'green') {
    console.log('Cross the road.')
}
else if (signal == 'yellow') {
    console.log("Stop and don't cross the road.")
}
else if (signal == 'red') {
    console.log("Don't cross the road.")
}
else {
    console.log("There is no signal.")
}

// using switch
switch (signal) {
    case 'green':
        console.log('Cross the road.');
        break;
    case 'yellow':
        console.log("Stop and don't cross the road.");
        break;
    case 'red':
        console.log("Don't cross the road.");
        break;
    default:
        console.log("There is no signal.");
}