let gridImport = require('../../src/grid');
let grid = gridImport.Grid;

describe("Grid", function() {
  it("should print out correct dimensions", function() {
      var gridDimensions = '2 2';
      var newGrid = new grid(gridDimensions);
      expect(newGrid.setup()).toEqual([['X','X'],['X','X']]);
  });
});


