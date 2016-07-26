const AnswerGenerator = require('../src/answer-generator');

describe('Answer Generator', () => {
    it('should generate answer', () => {
        const isUnique = (item, index, array) => {
           return array.lastIndexOf(item) === index; 
        };
        
        const answer = AnswerGenerator.generate();
        expect(answer.length).toEqual(4);
        expect(answer.split('').every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.generate()).not.toEqual(AnswerGenerator.generate());
    });
});