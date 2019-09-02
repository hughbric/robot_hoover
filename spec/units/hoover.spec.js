let hooverImport = require('../../src/hoover');
let hoover = hooverImport.Hoover;

describe("Hoover", function() {
  it("set hoover initial position", function() {
      var initialPostion = "1 2";
      var newHoover = new hoover(initialPostion);
      expect(newHoover.initialPosition).toEqual(['1', '2']);
  });

  describe("movements", function() {   
    var initialPostion = "1 1";
    var newHoover = new hoover(initialPostion);
    var grid = [['X','X','X'],['X','X','O'],['X','X','O']];

    it("N", function() {
      var move = "N";
      newHoover.clean(grid, move)
      expect(newHoover.finalPosition).toEqual("1 2");
    });

    it("S", function() {
      var move = "S";
      newHoover.clean(grid, move)
      expect(newHoover.finalPosition).toEqual("1 0");
    });

    it("E", function() {
      var move = "E";
      newHoover.clean(grid, move)
      expect(newHoover.finalPosition).toEqual("2 1");
    });

    it("W", function() {
      var move = "W";
      newHoover.clean(grid, move)
      expect(newHoover.finalPosition).toEqual("0 1");
    });

    it("W: stays in position if it hits a wall", function() {
      var move = "WW";
      newHoover.clean(grid, move)
      expect(newHoover.finalPosition).toEqual("0 1");
    });

    it("N: stays in position if it hits a wall", function() {
      var move = "NN";
      newHoover.clean(grid, move)
      expect(newHoover.finalPosition).toEqual("1 2");
    });

    it("S: stays in position if it hits a wall", function() {
      var move = "SS";
      newHoover.clean(grid, move)
      expect(newHoover.finalPosition).toEqual("1 0");
    });

    it("E: stays in position if it hits a wall", function() {
      var move = "EEE";
      newHoover.clean(grid, move)
      expect(newHoover.finalPosition).toEqual("2 1");
    });

    it("collects dirt piles", function() {
      var move = "NE";
      newHoover.clean(grid, move)
      expect(newHoover.dirtPilesHoovered).toEqual(2);
    });
  });
});

