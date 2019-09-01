const gridImport = require('./grid');
let grid = gridImport.Grid;

class App {
  constructor(input) {
    this.input = input.split('\n');
    this.grid;
  }

  run() {
    this._setupGrid();
    this._initilisePosition();
    this._setDirtPiles();
    return this.grid;
  }

  _setupGrid() {
    var dimensions = this.input.shift();
    this.grid = new grid(dimensions);
    this.grid.setup();
    return this.grid;
  }

  _initilisePosition() {
    var initialPosition = this.input.shift();
    this.grid.initialPosition = initialPosition;
  }

  _setDirtPiles() {
    this.input.forEach(dirtPileCoordinates => {
      var x = dirtPileCoordinates[0];
      var y = dirtPileCoordinates[2];

      if(x >= 0) {
        this.grid.setDirtPile(x, y);
      }
    });    
  }
}

module.exports = {
  App: App
}
