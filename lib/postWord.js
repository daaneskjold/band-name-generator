'use strict';

module.exports = function(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have the word ' + word + ' included in the list'};
  }

  wordObject[word] = true;
  console.log(wordObject);
  return {msg: word + ' added to the word list'};
};
