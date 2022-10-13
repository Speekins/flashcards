const Card = require('./Card');
const Round = require('./Round');
const util = require('./util');

class Game {
  constructor() {
    this.round;
  }

  start(data) {
    var cards = data.map(card => new Card(card));
    this.round = new Round(cards);
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

module.exports = Game;