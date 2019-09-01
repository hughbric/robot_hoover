class Grid {
  constructor(input) {
    this.dimensions = input;
    this.grid;
    this.initialPosition;
  }

  setup() {
    var X = this.dimensions[0];
    var Y = this.dimensions[2];
    this.grid = new Array(X);

    for(var i = 0; i < X; i++) {
      this.grid[i] = new Array(Y);
      for(var j = 0; j < Y; j++) {
        this.grid[i][j] = "X";
      }
    }
    return this.grid;
  }

  setDirtPile(x, y) {
    this.grid[x][y] = "O";
    return this.grid;
  }
}

module.exports = {
  Grid: Grid
}
