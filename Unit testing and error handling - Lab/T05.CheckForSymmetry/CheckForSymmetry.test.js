let { expect } = require('chai');
let { isSymmetric } = require('./T05.CheckForSymmetry');

describe('isSymetric', () => {
    it('The array should be valid', () => {
        let invalidArray = "[1, 'r', 7, 9, 'pp";
        
        let result = isSymmetric(invalidArray);

        expect(result).to.be.false;
    });

    it('Should return true if the array is symetric', () => {
        let validArray = [1, 2, 3, 4, 3, 2, 1];

        let result = isSymmetric(validArray);

        expect(result).to.be.true;
    });

    it('Should return false if the array is not symetric', () => {
        let validArray = [1, 2, 3, 4, 3, 2, 1, 8];

        let result = isSymmetric(validArray);

        expect(result).to.be.false;
    });
})