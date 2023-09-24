function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments); //only available inside the function. it's an array like object
}
add(12, 13, 45, 89, 78);