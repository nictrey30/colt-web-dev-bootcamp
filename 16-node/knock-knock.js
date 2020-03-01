let joke = require('knock-knock-jokes');
let rl = require('readline');
const readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = () => {
  rl.question('Do you wanna hear a knock-knock joke? y/n ', answer => {
    if (answer === 'y') {
      console.log(joke());
      askQuestion();
    } else if (answer === 'n') {
      rl.close();
    } else {
      console.log("Please input only 'y' or 'n'");
      askQuestion();
    }
  });
};

rl.on('close', function() {
  console.log('\nBYE-BYE');
  process.exit(0);
});

askQuestion();
