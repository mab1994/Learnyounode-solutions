var r = 0;
for (i = 2; i < process.argv.length; i++) {
  r += Number(process.argv[i]);
}

console.log(r);