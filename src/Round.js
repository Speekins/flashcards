const Turn = require("./Turn");
const Deck = require("./Deck");

class Round {
  constructor(cards) {
    this.deck = new Deck(cards);
    this.currentCard = this.deck.cards[0];
    this.turn;
    this.startTime = Date.now();
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

  calculateTotalTime() {
    return this.convertMillisecondsToMinutes(Date.now() - this.startTime);
  }

  convertMillisecondsToMinutes(milliseconds) {
    let seconds = milliseconds / 1000;
    let minutes;
    if (seconds > 60) {
      minutes = seconds / 60;
      seconds = minutes % seconds;
      return `${Math.round(minutes)} minutes & ${Math.round(seconds)} seconds!`;
    }
    return `${Math.round(seconds)} seconds!`;
  }

  endRound() {
    var percent = this.calculatePercentCorrect();
    console.log(`Total Time: ${this.calculateTotalTime()}`)
    return `** Round over! ** You answered ${percent}% of the questions correctly!`;
  }
}

module.exports = Round;