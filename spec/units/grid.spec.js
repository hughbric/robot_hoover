let gridImport = require('../../src/grid');
let grid = gridImport.Grid;

describe("Grid", function() {
  it("dimensions can be set", function() {
    var gridDimensions = "2 2";
    var newGrid = new grid(gridDimensions);
    expect(newGrid.dimensions).toEqual([ '2', '2' ]);
  });

  it("setup should return a two-dimensional array", function() {
      var gridDimensions = "2 2";
      var newGrid = new grid(gridDimensions);
      expect(newGrid.setup()).toEqual([['X','X'],['X','X']]);
  });

  it("setup should work for rectangle sized rooms", function() {
    var gridDimensions = "4 2";
    var newGrid = new grid(gridDimensions);
    expect(newGrid.setup()).toEqual([['X','X'],['X','X'],['X','X'],['X','X']]);
  });
  
  it("sets up a dirt pile", function() {
    var gridDimensions = "2 2";
    var newGrid = new grid(gridDimensions);
    newGrid.setup();
    expect(newGrid.setDirtPile(0, 0)).toEqual([['O','X'],['X','X']]);
  });
});


