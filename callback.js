function greetings(greetingHandler,name) {
    // console.log(greetingHandler());
    greetingHandler(name);
}

// const number = [45,54,78];
// const laptop = { price: 45000, brand: 'lenovo' };

function greetingHandler(name) {
    console.log('Good Morning',name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetNight(name) {
    console.log('Good Night', name);
}

greetings(greetingHandler,'Tom Hanks');
greetings(greetingHandler,'Tom Brady');
greetings(greetingHandler,'Tom Cruise');
greetings(greetEvening,'Tom Holland');
greetings(greetNight, 'John Doe');


// instead of anonymous function we can call a cal back function declared before or after
function submitHandler() {
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler);
