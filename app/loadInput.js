var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

function adder() {
  var input = require("../input.txt");
  return input;
}

module.exports = adder();