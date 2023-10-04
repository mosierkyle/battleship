import {
  Ship,
  submarine,
  carrier,
  cargoShip,
  sailBoat,
  warShip,
} from '/Users/kylemosier/repos/battleship/src/modules/ships/ships';

const createGameBoard = () => {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let col = [];
    for (let j = 0; j < 10; j++) {
      let spot = j;
      col.push([i, j, 'empty']);
    }
    board.push(col);
  }
  return board;
};

class GameBoard {
  constructor() {
    this.board = createGameBoard();
    this.missedAttacks = [];
    this.hits = [];
    this.ships = [submarine, sailBoat, cargoShip, carrier, warShip];
  }

  addShips() {
    while (this.ships.length != 0) {
      let shipLen = this.ships[0].len;
      let randomX = Math.floor(Math.random() * 10);
      let randomY = Math.floor(Math.random() * 10);
      let randomO = Math.floor(Math.random() * 2) + 1;
      if (this.checkEmpty(shipLen, randomX, randomY, randomO)) {
        let battleShip = this.ships.shift();
        this.placeShip(battleShip, randomO, randomX, randomY);
      }
    }
  }

  checkEmpty(length, x, y, orientation) {
    if (orientation == 2) {
      if (y + length > 9) {
        return false;
      }
      for (let i = y; i <= length + y; i++) {
        if (this.board[x][i][2] != 'empty') {
          return false;
        }
      }
    } else if (orientation == 1) {
      if (x + length > 9) {
        return false;
      }
      for (let i = x; i <= length + x; i++) {
        if (this.board[i][y][2] != 'empty') {
          return false;
        }
      }
    }
    return true;
  }

  placeShip(ship, orientation, x, y) {
    if (orientation == 2) {
      for (let i = y; i < ship.len + y; i++) {
        this.board[x][i][2] = ship;
      }
    }
    if (orientation == 1) {
      for (let i = x; i < ship.len + x; i++) {
        this.board[i][y][2] = ship;
      }
    }
  }

  recieveAttack(x, y) {
    if (this.hits.includes([x, y]) || this.missedAttacks.includes([x, y])) {
      return 'you already went there';
    }
    const square = this.board[x][y][2];
    if (square == 'empty') {
      this.board[x][y][2] = 'miss';
      this.missedAttacks.push([x, y]);
      return 'miss';
    } else if (square != 'empty' && square != 'miss') {
      square.hit();
      this.hits.push([x, y]);
      this.board[x][y][2] = 'hit';
      return 'hit';
    }
  }

  shipsSunk() {
    let sunkCount = 0;
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].isSunk()) {
        sunkCount += 1;
      }
    }
    return sunkCount > this.ships.length ? true : false;
  }
}

const game = new GameBoard();
game.addShips();

export { game };
