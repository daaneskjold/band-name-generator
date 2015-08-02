'use strict';

module.exports = function buildWordsArray(wordObject1, wordObject2, wordObject3) {
  var adjectivesArray = objectToString(wordObject1);
  var nounsArray = objectToString(wordObject2);
  var verbsArray = objectToString(wordObject3);

  console.log(adjectivesArray);
  return '<tr><th id="tableColumn">Adjectives</th></tr>' + adjectivesArray +
  '<tr><th id="tableColumn">Nouns</th></tr>' + nounsArray +
  '<tr><th id="tableColumn">Verbs</th></tr>' + verbsArray;
};

function objectToString(object) {
  var htmlString = '';
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      htmlString += '<tr><td>' + property + '</td></tr>';
    }
  }

  return htmlString;
}
