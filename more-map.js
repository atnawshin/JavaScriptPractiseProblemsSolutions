const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(n => n * 2);
// console.log(doubled);
const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus);

const makeHalf = numbers.map(num => num / 2);
console.log(makeHalf);

const friends = ['Monica', 'Chandler', 'Joye', 'Phoebe', 'Ross', 'Rechal'];
const lengths = friends.map(friend => friend.length);
console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);