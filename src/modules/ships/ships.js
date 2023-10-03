class Ship {
  constructor(len) {
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

const submarine = new Ship(3);
const carrier = new Ship(5);
const sailBoat = new Ship(2);
const warShip = new Ship(4);
const cargoShip = new Ship(4);

export { submarine, carrier, cargoShip, sailBoat, warShip };
