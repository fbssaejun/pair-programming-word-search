// PAIR PROGRAM - WORD SEARCH
// ANTHONY KIM, JOSHUA BANG
const {transpose} = require('./transpose')

const wordSearch = (letters, word) => {
  //Joins whole input array horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  //Transposes the whole array, makes a new array of horizontal words from original array
  const verticalArray = transpose(letters).map(letters => letters.join(''));
  //Checks if the word exsists in the horizontal words array
  for (const wordsV of verticalArray) {
    if (wordsV.includes(word)) {
      return true;
    }
  }
  //Checks if the word exsists in the vertical array
  for (const wordsH of horizontalJoin) {
    if (wordsH.includes(word)) {
      return true;
    }
  }
  //If no match, return false
  return false;
};

module.exports = wordSearch;
