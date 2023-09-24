// function isJavaScript(filename) {
//     // validation
//     // console.log(typeof filename);
//     if (typeof filename !== 'string') {
//         return "Please provide a valid file name (string)."
//     } else {
//         // if (filename.toLowerCase().endsWith('.js')) {
//         //     return true;
//         // } else {
//         //     return false;
//         // }
//         //optimized version
//         return (filename.toLowerCase().endsWith('.js')); // returns true || false

//     }

// }

function isJavaScript(filename) {
    // validation
    // console.log(typeof filename);
    if (typeof filename !== 'string') {
        return "Please provide a valid file name (string)."
    } else {
        //hello.world.bd.js
        const arr = filename.split('.');
        console.log(arr)
        const lastElement = arr.pop(); //last element pop hoye jabe
        return lastElement.toLowerCase() === 'js';
        // if (lastElement.toLowerCase() == 'js') {
        //     return true;
        // }
        // else {
        //     return false;
        // }
    }

}
console.log(isJavaScript("hello.js"));