const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
read.question('Enter your name: ', (name) => {
  console.log(`Hello ${name}`);
  read.close();
});
