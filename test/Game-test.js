const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {
  let game, testData, testRound;

  beforeEach(function() {
    testData = [{
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
    }];
    testRound = {
      deck: {cards: [{
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
      }]},
      currentCard: {
        id: 24,
        question: 'What is Robbie\'s favorite animal',
        answers: ['sea otter', 'pug', 'capybara'],
        correctAnswer: 'sea otter'
      },
      startTime: Date.now(),
      turnsTaken: 0,
      incorrectGuesses: []
    };
    game = new Game();
    game.start(testData);
  })

  it('should keep track of the current round', () => {
    
    expect(game.round).to.eql(testRound);
  })

  it('should start the game', () => {
    
    expect(game.round.deck.cards).to.eql(testData)
  })
})