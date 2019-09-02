const gridImport = require('./grid');
const hooverImport = require('./hoover');
const grid = gridImport.Grid;
const hoover = hooverImport.Hoover;

class App {
  constructor(input) {
    this.input = input.split('\n');
    this.grid;
    this.hoover;
  }

  run() {
    this._setupGrid();
    this._setupHoover();
    this._setDirtPiles();
    this._hooverMovements();
    return `${this.hoover.finalPosition}\n${this.hoover.dirtPilesHoovered}`;
  }

  _setupGrid() {
    var dimensions = this.input.shift();
    this.grid = new grid(dimensions);
    this.grid.setup();
  }

  _setupHoover() {
    var initialPosition = this.input.shift();
    this.hoover = new hoover(initialPosition);
  }

  _setDirtPiles() {
    this.input.forEach(dirtPileCoordinates => {
      var x = dirtPileCoordinates.split(' ')[0];
      var y = dirtPileCoordinates.split(' ')[1];

      if(x >= 0) {
        this.grid.setDirtPile(x, y);
      }
    });    
  }

  _hooverMovements() {
    var path = this.input.pop();
    return this.hoover.clean(this.grid.grid, path);
  }
}

module.exports = {
  App: App
}
