const gridImport = require('./grid');
let grid = gridImport.Grid;

class App {
  constructor(input) {
    this.input = input;
    this.dimensions = "";
  }

  run() {
    this.dimensions = this.input.split('\n')[0];
    grid = new grid(this.dimensions);
    return grid.setup();
  }
}

module.exports = {
  App: App
}
