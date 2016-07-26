const AnswerGenerator = require('./answer-generator');

class Game {
    constructor() {
        this.answer = AnswerGenerator.generate();
        this.chances = 6;

        process.stdin.resume();
        process.stdin.setEncoding('utf8');
    }

    start() {
        console.log('Welcome!\n');
        this.ask();
    }

    ask() {
        if (this.isGameOver()) {
            console.log('Game Over');
            return;
        }

        console.log('Please input your number(6):');
        process.stdin.on('data', (input) => {
            if (input === this.answer) {
                console.log('Congratulations!');
            } else {
                this.chances--;
                this.ask();
            }
        });
    }

    isGameOver() {
        return this.chances === 0;
    }
}

new Game().start();

module.exports = Game;