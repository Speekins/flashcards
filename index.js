const readline = require('readline-sync');
const data = require("./src/data");
const Game = require("./src/Game");
var game = new Game();

console.clear();

var playerChoice = readline.question('Please choose a set of flashcards to study: Lord of the Rings or JavaScript.');

while (true) {
  if (playerChoice === 'lord of the rings' || playerChoice === 'javascript') {
    console.clear();
    break;
  }
  console.clear();
  console.log("That is not a valid response.");
  playerChoice = readline.question('Please choose a set of flashcards to study: Lord of the Rings or JavaScript.').toLowerCase();
}

if (playerChoice === 'lord of the rings') {
  game.start(data.lotrTrivia)
} else if (playerChoice === 'javascript') {
  game.start(data.jsQuiz)
}