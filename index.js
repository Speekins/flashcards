// This is where your project starts.

const { prototypeData } = require("./src/data");
const Game = require("./src/Game");

console.log('Your project is running...');

var game = new Game();

game.start(prototypeData);