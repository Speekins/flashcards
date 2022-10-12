const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { prototype } = require('../src/Game');
const { prototypeData } = require('../src/data');
const testCards = [{
  id: 24,
  question: 'What is Robbie\'s favorite animal',
  answers: ['sea otter', 'pug', 'capybara'],
  correctAnswer: 'sea otter'
},
{
  id: 14,
  question: 'What organ is Khalid missing?',
  answers: ['spleen', 'appendix', 'gallbladder'],
  correctAnswer: 'gallbladder'
},
{
  id: 12,
  question: 'What is Travis\'s middle name?',
  answers: ['Lex', 'William', 'Fitzgerald'],
  correctAnswer: 'Fitzgerald'
}]
var testDeck = new Deck(testCards);
var testRound = new Round(testDeck);

describe('Game', function() {
  it('should keep track of the current round', () => {
    var game = new Game();
    game.round = testRound;

    expect(game.round).to.eql(testRound);
  })

  it('should start the game', () => {
    var game = new Game();
    game.start(prototypeData);
    
    expect(game.round.deck.cards).to.eql(prototypeData)
  })
})