let newGuessingGame = require('./lib/newGuessingGame');
let guessingGameMakeGuess = require('./lib/guessingGameMakeGuess');
let guessingGameIsDone = require('./lib/guessingGameIsDone');
let readlineSync;
try {
  readlineSync = require('readline-sync');
} catch (err) {
  console.log('You must install the readline-sync module. Run the following');
  console.log('command to install it:');
  console.log();
  console.log('  npm install');
  console.log();

  process.exit();
}

let wordToGuess = 'hello';

function amountGuess(word) {
  noRepeats = []

  for (let element of wordToGuess) {
    if (!noRepeats.includes(element)) {
      noRepeats.push(element)
    }

  }
  return noRepeats.length
}
amountGuess(wordToGuess)

let game = newGuessingGame('onomatopoeia');

console.log(`"Guessing" the word '${wordToGuess}', one letter at a time.`);
console.log();

for (let i = 0; i < noRepeats.length + 2; i++) {
  letter = readlineSync.question("Guess a letter: ")
  console.log(`Guessing letter: ${letter}`);

  guessingGameMakeGuess(game, letter);

  console.log(`Current word is: ${game.currentWord}`);
  console.log();
  if (guessingGameIsDone(game)) {
    i = noRepeats.length + 2
  }
    ;
}

let isGameDone = guessingGameIsDone(game);

console.log(`We have guessed every letter in ${wordToGuess}.`);
console.log(`The game is done? ${isGameDone}`);
console.log(`How many turns did we take? ${game.numGuesses}`);

// The code below is commented out because it will run
// forever until you correctly imlpement the guessingGameMakeGuess
// and guessingGameIsDone functions.
/* let alphabet = 'abcdefghijklmnopqrstuvwxyz';

 while (!guessingGameIsDone(game)) {
   for (let letter in alphabet) {
     guessingGameMakeGuess(game, letter);
   }
 }

 console.log(`Congratulations! You won in ${game.numGuesses} moves`);
 */
