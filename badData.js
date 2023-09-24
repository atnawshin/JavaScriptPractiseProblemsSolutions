function findingBadData(arr) {
    if (!Array.isArray(arr)) {
        return "Please enter an array of numbers."
    } else {
        let badData = 0;
        /* for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (typeof element !== 'number') {
                return "Please enter an array of numbers."
            } else {
                // console.log(element);
                if (element < 0) {
                    badData = badData + 1;
                } 
            }
        } */
        
        for (let item of arr) {
            if (typeof item !== 'number') {
                return "Please enter an array of numbers."
            } else {
                if (item < 0) {
                    badData++;
                }
            }
        }

        return badData;
    }

}
// const array = [1, 2, 5]; // output : 0
const array = [1, -2, -5]; // output: 2
console.log(findingBadData(array));