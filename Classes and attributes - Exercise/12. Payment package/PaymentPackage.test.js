let { PaymentPackage } = require('./T12.PaymentPackage');
let { assert } = require('chai');

describe('Testing PaymentPackage functionalities', () => {
    describe('Testing the constructor', () => {
        it('Testing the constructor with valid data', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
    
            assert.equal(paymentPackage.name, 'CurrPackage');
            assert.equal(paymentPackage.value, 2000);
            assert.equal(paymentPackage.VAT, 20);
            assert.equal(paymentPackage.active, true);
        })

        it('Testing the constructor with invalid data', () => {
            assert.throw(() => {
                let paymentPackage = new PaymentPackage(false, "KKK");
            });
        })
    })

    describe('Testing the .name property validation', () => {
        it('The .name proeprty should throw an error if it is not string', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
            
            assert.throw(() => {
                paymentPackage.name = 23;
            }, 'Name must be a non-empty string');
        })

        it('The .name proeprty should throw an error if it is an empty string', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
                
            assert.throw(() => {
                paymentPackage.name = '';
            }, 'Name must be a non-empty string');  
        })

        it('The .name proerty should be set correct if the given value is valid', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
            let validName = 'NewPackage';

            paymentPackage.name = validName;

            assert.equal(paymentPackage.name, validName);
        })
    })

    describe('Testing the .value porperty validation', () => {
        it('The .value propery should throw an error if it is not a number', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);

            assert.throw(() => {
                paymentPackage.value = "Angel";
            }, 'Value must be a non-negative number');
        })

        it('The .value propery should throw an error if it is negative', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);

            assert.throw(() => {
                paymentPackage.value = -80;
            }, 'Value must be a non-negative number');
        })

        it('The .value propery should be set correctly if the given value is valid', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
            let validValue = 4000;

            paymentPackage.value = validValue;

            assert.equal(paymentPackage.value, validValue);
        })
    })

    describe('Testing .VAT property validation', () => {
        it('The .VAT propery should throw an error if it is not a number', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);

            assert.throw(() => {
                paymentPackage.VAT = "Angel";
            }, 'VAT must be a non-negative number');
        })

        it('The .VAT propery should throw an error if it is negative', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);

            assert.throw(() => {
                paymentPackage.VAT = -10;
            }, 'VAT must be a non-negative number');
        })

        it('The .VAT property shopult be set correctly if the given value is valid', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
            let validVAT = 30;

            paymentPackage.VAT = validVAT;

            assert.equal(paymentPackage.VAT, validVAT);
        })
    })

    describe('Testing .active property validation', () => {
        it('The .active property should throw error if it is not boolean', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);

            assert.throw(() => {
                paymentPackage.active = 'l';
            }, 'Active status must be a boolean');
        })

        it('The .active property should be set correctly if the given value is valid', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
            let validActive = false;

            paymentPackage.active = validActive;

            assert.equal(paymentPackage.active, validActive);
        })
    })

    describe('Testing the toString() function', () => {
        it('The toString() function should make a label `inactive` if the status active is false', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
            let validActive = false;

            paymentPackage.active = validActive;
            let result = paymentPackage.toString();

            let expectedResult = [ 
                `Package: ${paymentPackage.name} (inactive)`,
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ].join('\n');

            assert.equal(result, expectedResult);
        })

        it('The toString() function should make a label `inactive` if the status active is true', () => {
            let paymentPackage = new PaymentPackage("CurrPackage", 2000);
            
            let result = paymentPackage.toString();

            let expectedResult = [ 
                `Package: ${paymentPackage.name}`,
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ].join('\n');

            assert.equal(result, expectedResult);
        })
    })
})