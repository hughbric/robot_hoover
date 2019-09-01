require('../../src/loadInput');
const testInput = require('./testInput.txt');

describe("Load textfiles", function() {
  it("should return a string", function() {
      var type = typeof testInput;
      expect(type).toEqual('string');
  });

  it("should return the correct file data", function() {
    var actual = testInput;
    var expected = `5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW`
    expect(actual).toEqual(expected);
  });
});
