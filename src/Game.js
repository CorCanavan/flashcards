const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cardList = prototypeQuestions.map(element => {
      return new Card(element.id, element.question, element.answers, element.correctAnswer);
    });
     const deck = new Deck(cardList);
     const round = new Round(deck.cardSet);
     this.currentRound = round;
     this.printMessage(deck, round);
     this.printQuestion(round);
  }
}

module.exports = Game;
