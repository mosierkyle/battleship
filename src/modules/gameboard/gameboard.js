import { Ship } from '/Users/kylemosier/repos/battleship/src/modules/ships/ships';

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
    this.submarine = new Ship(3, 'submarine');
    this.sailBoat = new Ship(2, 'sailBoat');
    this.cargoShip = new Ship(4, 'cargoShip');
    this.carrier = new Ship(5, 'carrier');
    this.warShip = new Ship(4, 'warShip');
    this.ships = [
      this.submarine,
      this.sailBoat,
      this.cargoShip,
      this.carrier,
      this.warShip,
    ];
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
    const placedShip = [];
    if (orientation == 2) {
      for (let i = y; i < ship.len + y; i++) {
        this.board[x][i][2] = ship;
        placedShip.push([x, i]);
      }
    }
    if (orientation == 1) {
      for (let i = x; i < ship.len + x; i++) {
        this.board[i][y][2] = ship;
        placedShip.push([i, y]);
      }
    }
    return placedShip;
  }

  recieveAttack(x, y) {
    const square = this.board[x][y][2];
    if (square == 'miss' || square == 'hit') {
      return 'you already went there';
    } else if (square == 'empty') {
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

  shipsSunk(totalShips = this.ships.length) {
    let sunkCount = 0;
    for (let i = 0; i < totalShips; i++) {
      if (this.ships[i].isSunk()) {
        sunkCount += 1;
      }
    }
    return sunkCount >= totalShips ? true : false;
  }
}

const game = new GameBoard();
game.addShips();

export { game, GameBoard };
