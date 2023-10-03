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

export { submarine };
