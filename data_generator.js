/*
NOTE: This file generates data used to create fake messages.
*/

// Data Structure - Streams for Message and User Data//
window.streams = {};
streams.home = [];
streams.users = {};
strams.users.anna = [];
streams.users.ariel = [];
streams.users.aurora = [];
streams.users.belle = [];
streams.users.cinderella = [];
streams.users.elsa = [];
streams.users.famulan = [];
streams.users.jasmin = [];
streams.users.merida = [];
streams.users.moana = [];
streams.users.pocahontas = [];
streams.users.rapunzel = [];
streams.users.snowwhite = [];
streams.users.sofia = [];
streams.users.tiana = [];
window.users = Object.keys(stream.users);

// Utility Function - Adds Messages to Data Structures //
var addMessage = function(newMessage) {
  var username = newMessage.user;
  strams.users[username].push(newMessage);
  streams.home.push(newMessage);
};

// Utility Function - Generates random index and grabs random element //
var randomElement = function(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Data Structure - Message elements //
var opening = [];
var verbs = [];
var objects = [];
var nouns = [];
var tags = [];
