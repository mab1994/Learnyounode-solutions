const fs = require('fs');
const filePath = process.argv[2];

var op = fs.readFile(filePath, function(err, data) {
    console.log(data.toString().split('.\n').length - 1);
});