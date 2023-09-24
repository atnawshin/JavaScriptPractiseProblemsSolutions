const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Amir'],
    movies: [{ name: 'n0 1', year: 2015 }, { name: 'king khan', year: 2018 }],
    act: function () {
        console.log('acting like sakib khan')
    },
    car: {
        brand: 'tesla',
        price: 500000000,
        made: 2025,
        menufacturar: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}
console.log(nayok.act);
nayok.act();