const gridImport = require('./grid');
let grid = gridImport.Grid;

class App {
  constructor(input) {
    this.input = input;
    this.grid;
  }

  run() {
    this._setupGrid();
    this._initilisePosition();
  }

  _setupGrid() {
    var dimensions = this.input.split('\n')[0];
    this.grid = new grid(dimensions);
    this.grid.setup();
    return this.grid;
  }

  _dirtPiles() {

  }

  _initilisePosition() {
    var initialPosition = this.input.split('\n')[1];
    this.grid.initialPosition = initialPosition;
  }
}

module.exports = {
  App: App
}
