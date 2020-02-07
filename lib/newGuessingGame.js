/**
 * Returns a new guessing game object with the given target word.
 *
 * @param {string} targetWord - The word we need to guess
 * @returns {object} A new guessing game object
 */
function newGuessingGame(targetWord) {
  let emptyWord = '_'.repeat(targetWord.length);

  return {
    targetWord: targetWord,
    currentWord: emptyWord,
    numGuesses: 0,
    numWrongGuesses: 0,
    numCorrectGuesses: 0,
  };
}

module.exports = newGuessingGame;
