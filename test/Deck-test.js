const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js')
const data1 = {
  id: 1,
  question: 'What is Robbie\'s favorite animal',
  answers: ['sea otter', 'pug', 'capybara'],
  correctAnswer: 'sea otter'
};
const data2 = {
  id: 14,
  question: 'What organ is Khalid missing?',
  answers: ['spleen', 'appendix', 'gallbladder'],
  correctAnswer: 'gallbladder'
};
const data3 = {
  id: 12,
  question: 'What is Travis\'s middle name?',
  answers: ['Lex', 'William', 'Fitzgerald'],
  correctAnswer: 'Fitzgerald'
}

describe('Deck', function () {
  it('should be a function', () => {

    expect(Deck).to.be.a('function');
  })

  it('should be able to be instantiated', () => {
    var deck = new Deck;

    expect(deck).to.be.instanceOf(Deck);
  })

  it('should start out with an array of cards passed in as an argument', () => {
    const card1 = new Card(data1);
    const card2 = new Card(data2);
    const card3 = new Card(data3);
    var deck = new Deck([card1, card2, card3]);

    var testDeck = [{
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

    expect(deck.cards).to.eql(testDeck);
  })

  it('should know the number of cards', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    var deck = new Deck;
    deck.cards = [card1, card2, card3];
    var numOfCards = deck.countCards();

    expect(deck.cards.length).to.equal(numOfCards);
  })
})