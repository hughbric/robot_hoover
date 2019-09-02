require('./src/loadInput');
const input = require('./input.txt');
const source = require('./src/app');

var app = source.App;
var hoover = new app(input);

console.log("HOOVER 5000");
console.log("-----------")
console.log(hoover.run());
console.log("-----------");
