const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let cardSet;

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  beforeEach(() => {
    card1 = new Card(1, 'What animal cannot breathe through its mouth?', ['dog', 'horse', 'elephant'], 'horse');
    card2 = new Card(2, 'What is the only mammal that can fly?', ['flying squirrel', 'bat', 'monkey'], 'bat');
    card3 = new Card(3, 'What is a group of owls called?', ['murder', 'gaggle', 'parliament'], 'parliament');

    cardSet = [card1, card2, card3]
    deck = new Deck([card1, card2, card3]);
  });

  it('should be instantiated with an array of objects', () => {
    expect(deck.cardSet).to.deep.equal(cardSet);
  });

  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });
});
