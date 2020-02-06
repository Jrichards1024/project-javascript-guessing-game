let newGuessingGame = require('./lib/newGuessingGame');
let guessingGameMakeGuess = require('./lib/guessingGameMakeGuess');
let guessingGameIsDone = require('./lib/guessingGameIsDone');
let readlineSync = require('readline-sync');

let wordToGuess = 'pterodactyl';

let game = newGuessingGame('pterodactyl');

//console.log(`"Guessing" the word '${wordToGuess}', one letter at a time.`);
//console.log();

//for (let letter of wordToGuess) {

function amountGuesses() {
  array = []

  for (let element of wordToGuess) {
    if (!array.includes(element)) {
      array.push(element)
    }
  }
}

amountGuesses()

for (let i = 0; i < array.length + 2; i++) {
  let letter = readlineSync.question('Guess a letter! ');
  console.log(`Guessing letter: ${letter}`);

  guessingGameMakeGuess(game, letter);

  console.log(`Current word is: ${game.currentWord}`);
  console.log();
  if (game.currentWord === wordToGuess) {
    i = array.length
  }
}

let isGameDone = guessingGameIsDone(game);

console.log(`We have guessed every letter in ${wordToGuess}.`);
console.log(`The game is done? ${isGameDone}`);
console.log(`How many turns did we take? ${game.numGuesses}`);

// The code below is commented out because it will run
// forever until you correctly imlpement the guessingGameMakeGuess
// and guessingGameIsDone functions.
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

 while (!guessingGameIsDone(game)) {
   for (let letter in alphabet) {
     guessingGameMakeGuess(game, letter);
   }
 }

 console.log(`Congratulations! You won in ${game.numGuesses} moves`);
