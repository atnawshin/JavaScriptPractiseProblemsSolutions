var numbers = [78, 45, 98, 45];
numbers.push(63); //add an item to the last of an array

var friends = ['Balam', 'Kalam', 'Salam'];
friends.push('Gelam');
friends.push('Pailam');


// console.log(numbers);
// console.log(friends);

// pop - to get rid of the last element
// console.log(friends);

// friends.pop();
var element = friends.pop();
// console.log(friends);
// console.log("Poped item : ", element);

// add an element at the beginning of an array
friends.unshift("Karim");
console.log(friends);

// pop the first element from an array
var newFriends = friends.shift();
console.log(newFriends);
console.log(friends);

var newFriends = friends.splice(1, 1);
// newFriends contains the spliced item 
console.log(friends);
console.log(newFriends);