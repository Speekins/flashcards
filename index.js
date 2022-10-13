const readline = require('readline-sync');
const data = require("./src/data");
const Game = require("./src/Game");

console.clear();

var playerChoice = readline.question('Please choose a set of flashcards to study: Lord of the Rings or JavaScript.');

var game = new Game();
if (playerChoice.toLowerCase() === 'lord of the rings') {
  game.start(data.lotrTrivia)
} else if (playerChoice.toLowerCase() === 'javascript') {
  game.start(data.jsQuiz)
} else {
  console.clear();
  console.log("That is not a valid response.");
  playerChoice = readline.question('Please choose a set of flashcards to study: Lord of the Rings or JavaScript.');
}