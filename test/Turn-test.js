const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');


describe('Turn', function() {
  let card, card2, turn, turn2, data, data2;

  beforeEach(function() {
    data = {
      id: 1, 
      question: 'What is Robbie\'s favorite animal', 
      answers: ['sea otter', 'pug', 'capybara'], 
      correctAnswer: 'sea otter'
    }
    data2 = {
      id: 2, 
      question: 'What is the best 2000\'s emo band?', 
      answers: ['Emery', 'My Chemical Romance', 'The Starting Line', 'Mae', 'Copeland', 'Senses Fail'], 
      correctAnswer: 'Copeland'
    }
    card = new Card(data);
    card2 = new Card(data2);
    turn = new Turn('sea otter', card);
    turn2 = new Turn('My Chemical Romance', card2)
  });

  it('should be a function', () => {

    expect(Turn).to.be.a('function');
  })

  it('should be a new instance of Turn', () => {
    
    expect(turn).to.be.an.instanceOf(Turn);
  })

  it('should take the player\'s guess as an argument', () => {

    expect(turn.guess).to.equal('sea otter');
  })

  it('player\'s guess should be a string', () => {

    expect(turn.guess).to.be.a('string');
  })

  it('should take an instance of card as an argument', () => {

    expect(turn.card).to.eql(data);
  })

  it('should have a method that returns the guess', () => {

    expect(turn.returnGuess()).to.equal('sea otter');
  })

  it('should have a method that returns the card', () => {

    expect(turn.returnCard()).to.eql(data);
  })

  it('should be able to determine if the answer is correct', () => { 

    expect(turn.evaluateGuess()).be.true;
    expect(turn2.evaluateGuess()).be.false;
  })

  it('should tell the player is their answer was correct or incorrect', () => {

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  })

})