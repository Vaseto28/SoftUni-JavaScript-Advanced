let { assert } = require('chai');
let { sum } = require('./T04.SumOfNumbers');

describe('sum', () => {
    it('should return correct sum', () => {
        let array = [1, 2, 3];

        let result = sum(array);

        assert.equal(result, 6);
    })
})