const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData; //array of flashcards
const util = require('./util');

class Game {
  constructor() {
    this.round;
  }

  start(data) {
    var cards = data.map(card => new Card(card));
    var deck = new Deck(cards);
    this.round = new Round(deck);
    this.printMessage(this.round.deck);
    this.printQuestion(this.round);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

var newGame = new Game();

newGame.start(prototypeQuestions);

module.exports = Game;

//Game will start with a new round by default
//When the cards have run out, the round starts over
// -a new group of cards is passed to a new deck (presumably the cards the player got incorrect)
// -game.currentRound is reassigned to a new instance of round with the new deck passed to it