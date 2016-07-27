const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game {
    constructor() {
        this.answer = AnswerGenerator.generate();
        this.chances = 6;

        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input) => {
            if (!this.validate(input)) {
                console.log('Cannot input duplicate numbers!');
                this.ask();
            } else if (input === this.answer) {
                console.log('Congratulations!');
            } else {
                console.log(CompareNumber.compare(input, this.answer));
                this.chances--;
                if (this.isGameOver()) {
                    console.log('Game Over\n');
                    console.log(`Answer:${this.answer}`);
                    process.exit();
                } else {
                    this.ask();
                }
            }
        });
    }

    start() {
        console.log('Welcome!\n');
        this.ask();
    }

    ask() {
        console.log(`Please input your number(${this.chances}):`);
    }

    validate(input) {
        return input.split('').every((digit, index, array) => {
            return array.lastIndexOf(digit) === index;
        });
    }

    isGameOver() {
        return this.chances === 0;
    }
}

new Game().start();

module.exports = Game;