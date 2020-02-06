/**
 * Given a game and guess,
 */


function guessingGameMakeGuess(game, guess) {
  game.numGuesses =+ 1;
  for (let i = 0; i < game.targetWord.length; i++) {
    if (game.targetWord[i] === guess) {
      game.currentWord = game.currentWord.split('');
      game.currentWord[i] = guess;
      game.currentWord = game.currentWord.join('');
    }
  }
  return game.currentWord
}

module.exports = guessingGameMakeGuess;
