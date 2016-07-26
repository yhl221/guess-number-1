const CompareNumber = require('../src/compare-number');

describe('Compare Number', () => {
    it('returns xAxB', () => {
        [{
            input: '1234',
            answer: '5678',
            result: '0A0B'
        }, {
            input: '1234',
            answer: '1234',
            result: '4A0B'
        }, {
            input: '1234',
            answer: '1243',
            result: '2A2B'
        }].forEach(example => {
            const result = CompareNumber.compare(example.input, example.answer);
            expect(result).toEqual(example.result);
        })
    });
});