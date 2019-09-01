var appImport = require('../../src/app');
var app = appImport.App;

describe("App", function() {
  it("contains a grid object with dimensions", function() {
    var input = `1 1`;
    var hoover = new app(input);
    hoover.run();
    expect(hoover.grid.dimensions).toEqual("1 1");
  });

  it("sets an initial hoover position", function() {
    var input = `1 1\n0 0`;
    var hoover = new app(input);
    hoover.run();
    expect(hoover.grid.initialPosition).toEqual("0 0");
  });

  xit("should return a string", function() {
      var input = `5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW`;
      var hoover = new app(input);
      expect(typeof hoover.run()).toEqual("string");
  });

  xit("should return the hoover's final location and dirt piles hoovered", function() {
    var input = `5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW`;
    var hoover = new app(input);
    expect(hoover.run()).toEqual(`1 3\n1`);
  });
});
