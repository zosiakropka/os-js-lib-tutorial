var names = require('./starwars_names.json');
var buildGetRandom = require('unique-random-array');

var getRandomName = buildGetRandom(names);

module.exports = {
  all: names,
  random: getRandomName
};
