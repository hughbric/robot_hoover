let gridImport = require('../../src/grid');
let grid = gridImport.Grid;

describe("Grid", function() {
  it("setup should return a two-dimensional array ", function() {
      var gridDimensions = '2 2';
      var newGrid = new grid(gridDimensions);
      expect(newGrid.setup()).toEqual([['X','X'],['X','X']]);
  });

  it("setup should work for rectangle sized rooms", function() {
    var gridDimensions = '4 2';
    var newGrid = new grid(gridDimensions);
    expect(newGrid.setup()).toEqual([['X','X'],['X','X'],['X','X'],['X','X']]);
});
});


