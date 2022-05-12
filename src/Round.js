const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns += 1;
    const guessEval = turn.evaluateGuess();
    if (!guessEval) {
      this.incorrectGuesses.push(this.deck[0].id);
    }
    this.deck.shift();
    return turn.giveFeedback(guessEval);
  }

  calculatePercentCorrect() {
    const amountCorrect = this.turns - this.incorrectGuesses.length
    const percentCorrect = Math.floor((amountCorrect / this.turns) * 100)
    return percentCorrect;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
