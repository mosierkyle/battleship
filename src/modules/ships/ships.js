class Ship {
  constructor(len, name) {
    this.name = name;
    this.len = len;
    this.hits = 0;
    this.sunk = false;
  }
  isSunk() {
    return this.hits >= this.len ? true : false;
  }

  hit() {
    return (this.hits += 1);
  }
}

const submarine = new Ship(3, 'submarine');
const carrier = new Ship(5, 'carrier');
const sailBoat = new Ship(2, 'sailBoat');
const warShip = new Ship(4, 'warShip');
const cargoShip = new Ship(4, 'cargoShip');

export { submarine, carrier, cargoShip, sailBoat, warShip, Ship };
