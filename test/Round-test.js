const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  beforeEach(() => {
    card1 = new Card(1, 'What animal cannot breathe through its mouth?', ['dog', 'horse', 'elephant'], 'horse');
    card2 = new Card(2, 'What is the only mammal that can fly?', ['flying squirrel', 'bat', 'monkey'], 'bat');
    card3 = new Card(3, 'What is a group of owls called?', ['murder', 'gaggle', 'parliament'], 'parliament');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck.cardSet);
  });

  it('should store a deck of cards', () => {
    expect(round.deck).to.equal(deck.cardSet);
  });

  it('should have a turns property that starts at 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should have an incorrectGuesses array that starts out empty', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should return current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(round.deck[0]);
  });

  it('should increment turns property', () => {
    round.takeTurn('gaggle');
    expect(round.turns).to.equal(1);

    round.takeTurn('murder');
    expect(round.turns).to.equal(2);gi
  })
});
