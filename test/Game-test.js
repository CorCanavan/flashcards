const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Game', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  beforeEach(() => {
    card1 = new Card(1, 'What animal cannot breathe through its mouth?', ['dog', 'horse', 'elephant'], 'horse');
    card2 = new Card(2, 'What is the only mammal that can fly?', ['flying squirrel', 'bat', 'monkey'], 'bat');
    card3 = new Card(3, 'What is a group of owls called?', ['murder', 'gaggle', 'parliament'], 'parliament');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck.cardSet);
    game = new Game();
  });

});
