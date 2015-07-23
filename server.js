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

function Adjectives(){
  this.cute = true;
  this.kawaii = true;
  this.tensai = true;
  this.dynamite = true;
}

var adjectives = new Adjectives();

function getRandomWord(object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  //return {word: randomProp};
  return randomProp;
}
