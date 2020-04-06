const fs = require('fs');

const directory = process.argv[2];
const xt = process.argv[3];
var path = RegExp('\\.' + xt + '$');

file = fs.readdir(directory, function(err, files) {
  for (i = 0; i < files.length; i++) {
    if (path.test(files[i])) {
      console.log(files[i]);
    }
  }
});