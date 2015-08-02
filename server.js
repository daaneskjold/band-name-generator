'use strict';

var getRandomWord = require('./lib/getRandomWord');
var postWord = require('./lib/postWord');
var buildWordsArray = require('./lib/buildWordsArray');
var Adjectives = require('./lib/adjective');
var Nouns = require('./lib/nouns');
var Verbs = require('./lib/verbs');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyparser = require('body-parser');
var adjectives = new Adjectives();
var nouns = new Nouns();
var verbs = new Verbs();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app'));

app.listen(port, function() {
  console.log('Server started on port ' + port);
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/adjectives', function(req, res) {
  res.json(getRandomWord(adjectives));
});

app.get('/nouns', function(req, res) {
  res.json(getRandomWord(nouns));
});

app.get('/verbs', function(req, res) {
  res.json(getRandomWord(verbs));
});

app.post('/userAdjective', function(req, res) {
  res.json(postWord(req.body.word, adjectives));
});

app.post('/userNoun', function(req, res) {
  res.json(postWord(req.body.word, nouns));
});

app.post('/userVerb', function(req, res) {
  res.json(postWord(req.body.word, verbs));
});

app.get('/showWords', function(req, res) {
  res.json(buildWordsArray(adjectives, nouns, verbs));
});
