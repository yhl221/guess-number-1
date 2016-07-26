const AnswerGenerator = require('./answer-generator');

class Game {
    constructor() {
        this.answer = AnswerGenerator.generate();
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
    }

    start() {
        console.log('Welcome!\n');
        console.log('Please input your number(6):');

        process.stdin.on('data', (input) => {
            if (input === this.answer) {
                console.log('Congratulations!');
            }
        });
    }

}

new Game().start();

module.exports = Game;