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
streams.users.tinkerbell - [];
window.users = Object.keys(stream.users);

// Utility Function - Adds Messages/Teas to Data Structures //
var addMessage = function(newTea) {
  var username = newTea.user;
  strams.users[username].push(newTea);
  streams.home.push(newTea);
};

// Utility Function - Generates random index and grabs random element //
var randomElement = function(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Data Structure - Message/Tea elements //
var opening = ['yesterday i', 'completely', 'utterly', 'last evening', 'of course i', 'an evil queen', 'the other princesses', 'a handsom prince', 'ugh'];
var verbs = ['danced', 'cried', 'stopped', 'approached', 'married', 'got', 'escaped', 'loved', 'sang', 'cleaned', 'swam', 'saw', 'tempted', 'added', 'grabbed', 'lost', 'encouraged', 'brushed', 'froze', 'read', 'explored', 'walked', 'ran', 'sailed', 'pricked', 'forgot', 'discovered', 'invented', 'enjoyed', 'laughed', 'created'];
var objects = ['my', 'your', 'the', 'a', 'an entire', 'this', 'a whole', 'this', 'that', 'my', 'the big', 'a new', 'a novel way of', 'the'];
var nouns = ['noble steed', 'dragon', 'village', 'kingdom', 'bad decision', 'evil', 'canoe', 'sailboat', 'pixie dust', 'carriage', 'glass slipper', 'book', 'snowman', 'snowflake', 'sea', 'true love\'s kiss', 'thingamajig', 'fork', 'frog', 'shell', 'rose', 'spinning wheel', 'beast', 'Jimminy Cricket', 'spirit', 'hair', 'prince', 'happily ever after'];
var tags = ['#princesslife', '#yeet', '#yolo', '#magic', '#belive', '#dreamscometrue,' '#evil', '#princess', '#royalty', '#crowndown', '#again', '#toad', '#truelove'];

// Utility Function - Generates message/tea //
var randomTea = function() {
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// Utility Functions - Generates random messages/harks on a random schedule //

var generateRandomTea = function() {
  var tea = {};
  tea.user = randomElement(users);
  tea.message = randomTea();
  tea.created_at = new Date(); // I bet I could make this be more readable by creating a date variable and then having this be a string of more readable data
  addTea(tea);
};