// function maxInArray(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if (element > largest) {
//             largest = element
//         }
//         // console.log(element);
//     }
//     return largest
//     /* console.log('array inside the array',numbers) */   //to make sure if the input is ok
// }
// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log('The tallest person is:', tallest);


function findTallest(heights) {
    let largestHeight = heights[0];
    for (let i = 0; i < heights.length; i++){
        const index = i;
        const element = heights[index];
        if (element > largestHeight) {
            largestHeight = element;
        }
    }
    return largestHeight;
}
const heightArray = [167, 190, 120, 165, 137];
const tallestHeight = findTallest(heightArray);
console.log(tallestHeight);