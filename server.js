var getRandomWord = require('./lib/getRandomWord');
var Adjectives = require('./lib/adjective');
var Nouns = require('./lib/nouns');
var Verbs = require('./lib/verbs');
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/app"));

app.listen(port, function() {
  console.log('Server started on port ' + port);
});

app.get("/", function(req, res) {
  res.sendFile(index.html);
});

app.get("/adjectives", function(req, res) {
  res.json(getRandomWord(adjectives));
});

app.get("/nouns", function(req, res) {
  res.json(getRandomWord(nouns));
});

app.get("/verbs", function(req, res) {
  res.json(getRandomWord(verbs));
});

app.post("/userAdjective", function(req, res) {
  res.json(postWord(req.body.word,adjectives));
});

var adjectives = new Adjectives();
var nouns = new Nouns();
var verbs = new Verbs();

function postWord (word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have the adjective ' + word + ' included in the list'};
  }

  wordObject[word] = true;
  console.log(wordObject);
  return {msg: word + ' added to the adjective list'};
}
