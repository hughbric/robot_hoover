let appImport = require('../../src/app');
let app = appImport.App;

describe("App", function() {
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
