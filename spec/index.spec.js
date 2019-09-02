var appImport = require('../index');
const source = require('../src/app');

describe("printToConsole", function() {
  it("checks app.run() has benn called", function() {
    var app = source.App;
    var input = `5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW`;
    var hoover = new app(input);
    var runHoover = hoover.run();
    
    console.log = jasmine.createSpy("log");
    appImport.printToConsole();
    expect(console.log).toHaveBeenCalledWith(runHoover);
  });
});
