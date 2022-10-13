const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function () {
  let testDeck, round;

  beforeEach(function() {
    testDeck = [{
      id: 24,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    }];
    round = new Round(testDeck);
  })

  it('should take an array of cards (a deck) as an argument', () => {
    
    expect(round.deck.cards[0]).to.eql({
      id: 24,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    })
  })

  it('should be assigned a card from the deck', () => {

    expect(round.currentCard).to.eql({
      id: 24,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    });
  })

  it('should have a method that returns the current card', () => {

    expect(round.returnCurrentCard()).to.eql(testDeck[0])
  })

  it('should have a method that updates the number of turns taken', () => {
    round.takeTurn('sea otter');

    expect(round.turnsTaken).to.equal(1);
    expect(round.turn.guess).to.be.a('string');
  })

  it('should be able to store id of cards guessed incorrectly', () => {
    round.takeTurn('pug');

    expect(round.incorrectGuesses[0]).to.equal(24);
  })

  it('should be able to tell player percent of correct answers', () => {
    round.turnsTaken = 10;
    round.incorrectGuesses.push(1, 2, 3);

    expect(round.calculatePercentCorrect()).to.equal(70);
  })

  it('should be able to end the current round', () => {
    round.turnsTaken = 10;
    round.incorrectGuesses.push(1, 2, 3);

    expect(round.endRound()).to.equal('** Round over! ** You answered 70% of the questions correctly!');
  })
})