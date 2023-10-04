import { sailBoat, submarine } from '../ships/ships.js';
import { GameBoard, game } from './gameboard.js';

// test('Gameboard was created', () => {
//   expect(game.board[9][2]).toStrictEqual([9, 2, 'empty']);
// });

// test('Submarine was placed y', () => {
//   expect(
//     game.board[0][0][2] && game.board[0][1][2] && game.board[0][2][2]
//   ).toBe(submarine);
// });

// test('SailBoat was placed y', () => {
//   expect(game.board[8][0][2] && game.board[8][1][2]).toBe(sailBoat);
// });

test('Can Place Ship', () => {
  expect(game.placeShip(submarine, 2, 0, 0)).toStrictEqual([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
});

test('Can recieve attacks', () => {
  const testBoard = new GameBoard();
  testBoard.placeShip(submarine, 2, 0, 0);
  expect(testBoard.recieveAttack(0, 0)).toBe('hit');
  expect(testBoard.recieveAttack(9, 9)).toBe('miss');
});

test('Can tell if ships are sunk', () => {
  const testBoard = new GameBoard();
  testBoard.placeShip(submarine, 2, 0, 0);
  testBoard.recieveAttack(0, 0);
  testBoard.recieveAttack(0, 1);
  testBoard.recieveAttack(0, 2);
  expect(testBoard.shipsSunk(1)).toBe(true);
});

test('Can tell if ships are not sunk', () => {
  const testBoard = new GameBoard();
  testBoard.placeShip(submarine, 2, 0, 0);
  expect(testBoard.shipsSunk()).toBe(false);
});

test('Adds all of the ships', () => {
  const testBoard = new GameBoard();
  testBoard.addShips();
  const checkShips = (board) => {
    let subCount = 0;
    let carCount = 0;
    let cargoCount = 0;
    let sailCount = 0;
    let warCount = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j][2]['name'] == 'submarine') {
          subCount += 1;
        } else if (board[i][j][2]['name'] == 'cargoShip') {
          cargoCount += 1;
        } else if (board[i][j][2]['name'] == 'carrier') {
          carCount += 1;
        } else if (board[i][j][2]['name'] == 'sailBoat') {
          sailCount += 1;
        } else if (board[i][j][2]['name'] == 'warShip') {
          warCount += 1;
        }
      }
    }
    return [subCount, carCount, cargoCount, sailCount, warCount];
  };
  expect(checkShips(testBoard.board)).toStrictEqual([3, 5, 4, 2, 4]);
});
