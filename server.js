var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app"));

app.listen(port, function() {
  console.log('Server started on port ' + port);
});

app.get("/", function(req, res) {
  //res.send('Hello!!');
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

function Adjectives(){
  this.cute = true;
  this.kawaii = true;
  this.tensai = true;
  this.dynamite = true;
}

function Nouns(){
  this.mirror = true;
  this.random = true;
  this.risk = true;
  this.traffic = true;
}

function Verbs(){
  this.doubt = true;
  this.deserve = true;
  this.recognise = true;
  this.prevent = true;
}

var adjectives = new Adjectives();
var nouns = new Nouns();
var verbs = new Verbs();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  //return {word: randomProp};
  return randomProp;
}
