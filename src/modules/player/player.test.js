import { Player } from './player';
import { GameBoard } from '../gameboard/gameboard';

test('Take shot and hit', () => {
  const testBoard = new GameBoard();
  const player1 = new Player('player1');
  testBoard.placeShip(testBoard.submarine, 2, 0, 0);

  expect(player1.takeShot(0, 0, testBoard)).toBe('hit');
});

test('Take shot and miss', () => {
  const testBoard = new GameBoard();
  const player1 = new Player('player1');
  testBoard.placeShip(testBoard.submarine, 2, 0, 0);

  expect(player1.takeShot(4, 0, testBoard)).toBe('miss');
});

test('Take shot and already gone there', () => {
  const testBoard = new GameBoard();
  const player1 = new Player('player1');
  testBoard.placeShip(testBoard.submarine, 2, 0, 0);
  player1.takeShot(0, 0, testBoard);

  expect(player1.takeShot(0, 0, testBoard)).toBe('you already went there');
});

// test('Make random shot and hit ');

// test('Take random shot and miss');

// test('Take random shot and already gone there');
