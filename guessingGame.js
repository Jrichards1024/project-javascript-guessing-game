let newGuessingGame = require('./lib/newGuessingGame');
let guessingGameMakeGuess = require('./lib/guessingGameMakeGuess');
let guessingGameIsDone = require('./lib/guessingGameIsDone');
let hangman = require('./lib/hangman')
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
let wordToGuess = readlineSync.question('What word should be guessed?: ', { hideEchoBack: true});
wordToGuess = wordToGuess.toLowerCase()

//let wordToGuess = 'hello';

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

let game = newGuessingGame(wordToGuess);

console.log();

for (let i = 0; i < noRepeats.length * 100 ; i++) {
  letter = readlineSync.question("Guess a letter: ")
  letter = letter.toLowerCase()

  guessingGameMakeGuess(game, letter);


  hangman(game.numWrongGuesses)

  console.log(`Current word is: ${game.currentWord}`);
  console.log();

  if (game.numWrongGuesses === 6) {
    i = noRepeats.length * 100

  }
  if (guessingGameIsDone(game)) {
    i = noRepeats.length * 100;
  }
    ;
}

let isGameDone = guessingGameIsDone(game);

console.log(`The correct word was ${wordToGuess}.`);
if (isGameDone === true) {
  console.log ('Congratulations!! You Won!')
}
else {console.log('Wow you lost, be better :(')}
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
