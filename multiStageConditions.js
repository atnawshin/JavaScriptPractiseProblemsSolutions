var money = 68;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if (danishPrice < money) {
    console.log("Buy Danish");
}
else if (butterBread < money) {
    console.log("Buy Butter Bread");
}
else if (toastBiscuit < money) {
    console.log("Buy Toast Biscuit");
}
else {
    console.log("Drink tea only");
    
}