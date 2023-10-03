import { submarine, carrier, warShip, sailBoat, cargoShip } from './ships.js';

test('Is submarine sunk', () => {
  if (submarine.hits >= 3) {
    expect(submarine.isSunk()).toBe(true);
  } else if (submarine.hits < 3) {
    expect(submarine.isSunk()).toBe(false);
  }
});

test('Is carrier sunk', () => {
  if (carrier.hits >= 5) {
    expect(carrier.isSunk()).toBe(true);
  } else if (carrier.hits < 5) {
    expect(carrier.isSunk()).toBe(false);
  }
});

test('Is warShip sunk', () => {
  if (warShip.hits >= 4) {
    expect(warShip.isSunk()).toBe(true);
  } else if (warShip.hits < 4) {
    expect(warShip.isSunk()).toBe(false);
  }
});

test('Is sailBoat sunk', () => {
  if (sailBoat.hits >= 2) {
    expect(sailBoat.isSunk()).toBe(true);
  } else if (sailBoat.hits < 2) {
    expect(sailBoat.isSunk()).toBe(false);
  }
});

test('Is cargoShip sunk', () => {
  if (cargoShip.hits >= 4) {
    expect(cargoShip.isSunk()).toBe(true);
  } else if (cargoShip.hits < 4) {
    expect(cargoShip.isSunk()).toBe(false);
  }
});
