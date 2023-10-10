const friends = ['Monica', 'Chandler', 'Joye', 'Pheobe', 'Ross', 'Rechal', 'guest', 'odd', 'jenicee'];
const friends2 = [...friends];
// const length = friends2[1].length;
//console.log(friends, friends2, length);


let newFriends = [];
for (const friend of friends2) {
    const length = friend.length;
    if (length % 2 === 0) {
        newFriends.push(friend);
        console.log(friend);
    }
}
return newFriends;