function bestFriend(friends) {
    let largestName = '';
    for (let i = 0; i < friends.length; i++){
        const element = friends[i];
        if (element.length > largestName.length) {
            largestName = element;
        }
    }
    return largestName;
}
const myFriends = ['Monica', 'Chandler', 'Joey', 'Pheobe', 'Ross', 'Rechal'];
const longestName = bestFriend(myFriends);
console.log(longestName);