class Vehicle{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('some text');
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice) {
        super(name,price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}
class Truck extends Vehicle{
    constructor(name, price, load) {
        super(name,price);
        this.load = load;
    }

}
const bus1 = new Bus('Bus', 1200, 12, 13);
console.log(bus1);