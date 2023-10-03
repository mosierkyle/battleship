import { submarine } from '../ships/ships.js';
import { game } from './gameboard.js';

test('Gameboard was created', () => {
  expect(game.board[9][2]).toStrictEqual([9, 2, 'empty']);
});

test('submarine was placed y', () => {
  expect(
    game.board[0][0][2] && game.board[0][1][2] && game.board[0][2][2]
  ).toBe(submarine);
});
