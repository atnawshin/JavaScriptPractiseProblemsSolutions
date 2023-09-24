function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input"
    } else {
        if (arr[0] === arr[1]) {
            return 'equal'
        }
        else if (arr[0] < arr[1]) {
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        if (arr[0] < 0 || arr[1] < 0) {
            return "Invalid Input"
        }
        return arr;
    }
}

const array = [0, 1];
console.log(sortMaker(array));