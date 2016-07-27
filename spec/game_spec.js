const stdin = require('mock-stdin').stdin();
const AnswerGenerator = require('../src/answer-generator');
const Game = require('../src/game');

describe('Game', () => {
    beforeEach(() => {
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('should congrats user when guess the right answer', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
        expect(process.exit).toHaveBeenCalled();
    });

    it('should game over when run out of chance', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for (let i = 6; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            stdin.send('1235');
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });
    
    it('should prompt invalid input', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1134');

        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    });
});