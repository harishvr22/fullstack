//just for reference
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (answer) => {
  console.log('Hello, ' + answer + '!');
  rl.close();
});