let { testEquals } = require('./testHelpers');

let newGuessingGame = require('../lib/newGuessingGame');
let guessingGameMakeGuess = require('../lib/guessingGameMakeGuess');
let guessingGameIsDone = require('../lib/guessingGameIsDone');

function testIncrementsNumGuesses() {
  let game = newGuessingGame('hello');

  let beforeNumGuesses = game.numGuesses;

  guessingGameMakeGuess(game, 'h');

  let afterNumGuesses = game.numGuesses;

  testEquals(afterNumGuesses, beforeNumGuesses + 1, 'Making guess increments numGuesses by 1');
}

function testCorrectGuessUpdatesCurrentWord() {
  let expectedCurrentWord = '__ll_';
  let game = newGuessingGame('hello');

  guessingGameMakeGuess(game, 'l');

  testEquals(game.currentWord, expectedCurrentWord, 'Making correct guess correctly updates currentWord');
}

function testIncorrectGuessDoesNotUpdateCurrentWord() {
  let expectedCurrentWord = '_____';
  let game = newGuessingGame('hello');

  guessingGameMakeGuess(game, 'q');

  testEquals(game.currentWord, expectedCurrentWord, 'Making incorrect guess does not update currentWord');
}


testIncrementsNumGuesses();
testCorrectGuessUpdatesCurrentWord();
testIncorrectGuessDoesNotUpdateCurrentWord();
