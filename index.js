require('./src/loadInput');
const input = require('./input.txt');
const source = require('./src/app');

function printToConsole() {
  var app = source.App;
  var hoover = new app(input);

  console.log(hoover.run());
}

printToConsole();

module.exports = {
  printToConsole: printToConsole
}
