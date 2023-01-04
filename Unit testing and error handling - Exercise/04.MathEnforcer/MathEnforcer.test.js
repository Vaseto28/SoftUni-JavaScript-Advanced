let {mathEnforcer} = require('./T04.MathEnforcer');
let {assert} = require('chai');

describe('Testing mathEnforcer functionalities', () => {
    describe('addFive', () => {
        it('Should return undefined if the given param is not a number', () => {
            let invalidParam = 'String';

            let result = mathEnforcer.addFive(invalidParam);

            assert.equal(result, undefined);
        })

        it('Adding five to positive number', () => {
            let validNum = 8;

            let result = mathEnforcer.addFive(validNum);

            assert.equal(result, 13);
        })

        it('Adding five to negative number', () => {
            let validNum = -8;

            let result = mathEnforcer.addFive(validNum);

            assert.equal(result, -3);
        })

        it('Adding five to real number', () => {
            let validNum = 8.66543;

            let result = mathEnforcer.addFive(validNum);

            assert.closeTo(result, 13.66543, 0.01);
        })
    })

    describe('subtractTen', () => {
        it('Should return undefined if the given param is not a number', () => {
            let invalidParam = 'String';

            let result = mathEnforcer.subtractTen(invalidParam);

            assert.equal(result, undefined);
        })

        it('Subtracting ten from a positive number', () => {
            let validNum = 8;

            let result = mathEnforcer.subtractTen(validNum);

            assert.equal(result, -2);
        })

        it('Subtracting ten from a negative number', () => {
            let validNum = -8;

            let result = mathEnforcer.subtractTen(validNum);

            assert.equal(result, -18);
        })

        it('Subtracting ten from a real number', () => {
            let validNum = 13.5467;

            let result = mathEnforcer.subtractTen(validNum);

            assert.closeTo(result, 3.5467, 0.01);
        })
    })

    describe('sum', () => {
        it('Should return undefined if the first param is not a number', () => {
            let invalidFirstParam = 'String';

            let result = mathEnforcer.sum(invalidFirstParam, 4);

            assert.equal(result, undefined);
        })

        it('Should return undefined if the given param is not a number', () => {
            let invalidSecondParam = 'String';

            let result = mathEnforcer.sum(3, invalidSecondParam);

            assert.equal(result, undefined);
        })

        it('Shoul return the sum of the two positive numbers', () => {
            let firstNum = 8;
            let secondNum = 5;

            let result = mathEnforcer.sum(firstNum, secondNum);

            assert.equal(result, 13);
        })

        it('Shoul return the sum of the two negative numbers', () => {
            let firstNum = -8;
            let secondNum = -5;

            let result = mathEnforcer.sum(firstNum, secondNum);

            assert.equal(result, -13);
        })

        it('Shoul return the sum of one negative and one positive number', () => {
            let firstNum = 8;
            let secondNum = -5;

            let result = mathEnforcer.sum(firstNum, secondNum);

            assert.equal(result, 3);
        })

        it('Shoul return the sum of two real numbers', () => {
            let firstNum = 8.643;
            let secondNum = 5.683;

            let result = mathEnforcer.sum(firstNum, secondNum);

            assert.equal(result, 14.326);
        })

        it('Shoul return the sum of one real and one normal number', () => {
            let firstNum = 8;
            let secondNum = 5.928947;

            let result = mathEnforcer.sum(firstNum, secondNum);

            assert.equal(result, 13.928947);
        })
    })
})