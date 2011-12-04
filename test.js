
var fs = require('fs');
var str = fs.readFileSync('test.js', 'utf8');
var esprima = require('./lib/esprima');
var ast = esprima.parse(str);

console.log(require('util').inspect(ast, false, 15, true));
