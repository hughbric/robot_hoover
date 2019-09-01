let gridImport = require('../../app/grid');
let grid = gridImport.Grid;

describe("Grid", function() {
  it("should print out a grid of the room", function() {
      var gridDimensions = '2 2';
      var newGrid = new grid(gridDimensions);
      expect(newGrid.draw()).toEqual(`XX\nXX`);
  });
});


