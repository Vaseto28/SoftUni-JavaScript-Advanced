let {lookupChar} = require('./T03.CharLookup');
let {assert, Assertion} = require('chai');

describe('lookupChar tests', () => {
    it('Shoult return undefined if the first param is not string', () => {
        let firstInvalidParam = 88;

        let result = lookupChar(firstInvalidParam, 4);

        assert.equal(result, undefined);
    })

    it('Should return undefined if the second param is a real number', () => {
        let secondInvalidparam = 2.3234;

        let result = lookupChar("test", secondInvalidparam);

        assert.equal(result, undefined);
    })

    it('Should return `Incorrect index` if the given index is bigger or equal the string length', () => {
        let biggerIndex = 9;
        
        let result = lookupChar('KKK', biggerIndex);

        assert.equal(result, `Incorrect index`);
    })

    it('Should return `Incorect index` if the given index is below zero', () => {
        let smallerIndex = -9;
        
        let result = lookupChar('KKK', smallerIndex);

        assert.equal(result, `Incorrect index`);
    })

    it('Should return the char at the given index if it is valid', () => {
        let validIndex = 3;
        let validString = 'JS Advanced';

        let result = lookupChar(validString, validIndex);

        assert.equal(result, 'A');
    })
})