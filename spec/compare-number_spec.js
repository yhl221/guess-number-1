const CompareNumber = require('../src/compare-number');

describe('Compare Number', () => {
    it('returns xAxB', () => {
        [{
            input: '5678',
            answer: '1234',
            result: '0A0B'
        }, {
            input: '1234',
            answer: '1234',
            result: '4A0B'
        }, {
            input: '1243',
            answer: '1234',
            result: '2A2B'
        }, {
            input: '5643',
            answer: '1234',
            result: '0A2B'
        }, {
            input: '4321',
            answer: '1234',
            result: '0A4B'
        }, {
            input: '1253',
            answer: '1234',
            result: '2A1B'
        }].forEach(example => {
            const result = CompareNumber.compare(example.input, example.answer);
            expect(result).toEqual(example.result);
        })
    });
});