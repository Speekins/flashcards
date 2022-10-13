const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js')

describe('Deck', function () {
  let data1, data2, data3, card1, card2, card3, deck, testDeck

  beforeEach(function() {
    data1 = {
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    }
    data2 = {
      id: 14,
      question: 'What organ is Khalid missing?',
      answers: ['spleen', 'appendix', 'gallbladder'],
      correctAnswer: 'gallbladder'
    }
    data3 = {
      id: 12,
      question: 'What is Travis\'s middle name?',
      answers: ['Lex', 'William', 'Fitzgerald'],
      correctAnswer: 'Fitzgerald'
    }
    testDeck = [{
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    }, {
      id: 14,
      question: 'What organ is Khalid missing?',
      answers: ['spleen', 'appendix', 'gallbladder'],
      correctAnswer: 'gallbladder'
    }, {
      id: 12,
      question: 'What is Travis\'s middle name?',
      answers: ['Lex', 'William', 'Fitzgerald'],
      correctAnswer: 'Fitzgerald'
    }]
    card1 = new Card(data1);
    card2 = new Card(data2);
    card3 = new Card(data3);
    deck = new Deck([card1, card2, card3])
  })
  
  it('should be a function', () => {

    expect(Deck).to.be.a('function');
  })

  it('should be able to be instantiated', () => {

    expect(deck).to.be.instanceOf(Deck);
  })

  it('should start out with an array of cards passed in as an argument', () => {

    expect(deck.cards).to.eql(testDeck);
  })

  it('should know the number of cards', () => {

    expect(deck.countCards()).to.equal(3);
  })
})