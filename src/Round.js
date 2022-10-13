const Turn = require("./Turn");
const Deck = require("./Deck");

class Round {
  constructor(cards) {
    this.deck = new Deck(cards);
    this.currentCard = this.deck.cards[0];
    this.turn;
    this.turnsTaken = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.currentCard);
    this.turnsTaken += 1;
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.deck.cards[this.turnsTaken];
    return this.turn.giveFeedback();
  }

  calculatePercentCorrect() {
    var numCorrect = this.turnsTaken - this.incorrectGuesses.length;
    return Math.round((numCorrect / this.turnsTaken) * 100);
  }

  endRound() {
    var percent = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${percent}% of the questions correctly!`;
  }
}

module.exports = Round;