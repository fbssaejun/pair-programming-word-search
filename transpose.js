//Callback
const transpose = function(matrix) {
  let finalArray = [];
  let stagingArray = [];
  let counter = matrix[0].length;
  while (counter > 0) {
    for (const array of matrix) {
      for (let i = 0; i < array.length; i++) {
        stagingArray.push(array.shift());
        break;
      }
    }
    finalArray.push(stagingArray);
    stagingArray = [];
    counter--;
  }
  return finalArray;
};

module.exports = {transpose};