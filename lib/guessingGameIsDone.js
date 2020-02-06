/**
 * Returns true if the given guessing game has its target word guessed
 * and false otherwise.
 *
 * @param {object} game - A guessing game object
 * @returns {boolean} Whether the given game has its target word guessed
 */
function guessingGameIsDone(game) {
  if (game.targetWord === game.currentWord) {
    return true
  } else {
      return false;
  }
}

module.exports = guessingGameIsDone;
