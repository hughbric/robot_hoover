class Grid {
  constructor(input) {
    this.dimensions = input.split(' ');
    this.grid;
  }

  setup() {
    var x = Number(this.dimensions[0]);
    var y = Number(this.dimensions[1]);
    this.grid = new Array(x);

    for(var i = 0; i < x; i++) {
      this.grid[i] = new Array(y);
      for(var j = 0; j < y; j++) {
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
