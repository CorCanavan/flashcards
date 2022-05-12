const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', () => {
  let game;

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a currentRound property', () => {
    expect(game).to.have.property('currentRound');
  });

  it('should initialize currentRound as null', () => {
    expect(game.currentRound).to.equal(null);
  });
});
