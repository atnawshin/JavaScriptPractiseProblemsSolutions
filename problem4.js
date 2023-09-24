function findAddress(obj) {
    if (typeof obj !== 'object') {
        return "Please enter a valid object."
    } else {
        const street = object.street || '__'
        const house = object.house || '__'
        const society = object.society || '__'

        return street + ',' + house + ',' + society;
    }
}


const object = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(object));