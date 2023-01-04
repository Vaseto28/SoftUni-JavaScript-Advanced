let { isOddOrEven } = require('./T02.EvenOrOdd');
const { assert } = require('chai');

describe('isOddOrEven', () => {
    it('Should return undefined if the argument is a number', () => {
        assert.equal(isOddOrEven(324342), undefined);
    })

    it('Should return odd if the argument length is odd number', () => {
        assert.equal(isOddOrEven('odd'), 'odd');
    })

    it('Should return even if the argument length is even number', () => {
        assert.equal(isOddOrEven('even'), 'even');
    })
})