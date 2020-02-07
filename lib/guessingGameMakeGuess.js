/**
 * Given a game and guess,
 */


function guessingGameMakeGuess(game, guess) {
  game.numGuesses += 1;
  correct = []
  correct.push(game.numCorrectGuesses)
  for (let i = 0; i < game.targetWord.length; i++) {
    if (game.targetWord[i] === guess) {
      game.numCorrectGuesses ++
      game.currentWord = game.currentWord.split('');
      game.currentWord[i] = guess;
      game.currentWord = game.currentWord.join('');
    }

  }
  if (game.numCorrectGuesses === correct[0]) {
    game.numWrongGuesses ++
  }

  return game.currentWord
}

module.exports = guessingGameMakeGuess;
