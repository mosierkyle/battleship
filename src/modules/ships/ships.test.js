import { submarine } from './ships.js';

test('Is submarine sunk', () => {
  if (submarine.hits >= 3) {
    expect(submarine.isSunk()).toBe(true);
  } else if (submarine.hits < 3) {
    expect(submarine.isSunk()).toBe(false);
  }
});
