function hangman(amount) {
  if (amount === 1) {
    console.log('  ___ ');
    console.log(' [   |');
    console.log(' O   |');
    console.log('     |');
    console.log('    _|_');
  } else if (amount === 2) {
    console.log('  ___ ');
    console.log(' [   |');
    console.log(' O   |');
    console.log(' |   |');
    console.log('    _|_');
  } else if (amount === 3) {
    console.log('  ___ ');
    console.log(' [   |');
    console.log(' O   |');
    console.log('-|   |');
    console.log('    _|_');
  } else if (amount === 4) {
    console.log('  ___ ');
    console.log(' [   |');
    console.log(' O   |');
    console.log('-|-  |');
    console.log('    _|_');
  } else if (amount === 5) {
    console.log('  ___ ');
    console.log(' [   |');
    console.log(' O   |');
    console.log('-|-  |');
    console.log('/   _|_');
  } else if (amount === 6) {
    console.log('  ___ ');
    console.log(' [   |');
    console.log(' O   |');
    console.log('-|-  |');
    console.log('/ \\ _|_');
  }
}

module.exports = hangman;
