const fs = require('fs');
const filePath = process.argv[2];

var op = fs.readFileSync(filePath);
op = op.toString().split('.\n');

console.log(op.length - 1)

