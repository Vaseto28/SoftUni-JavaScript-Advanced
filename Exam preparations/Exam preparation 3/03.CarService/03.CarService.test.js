let carService = require("./03. Car Service_Resources");
let {assert} = require('chai');

describe("Testing the carService", () => {
    describe("Testing the isItExpensive functionality", () => {
        it("Testing the case where the issue parameter equals to 'Engine'", () => {
            let actualMsg = carService.isItExpensive("Engine");
            let expectedMsg = `The issue with the car is more severe and it will cost more money`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the issue parameter equals to 'Transmission'", () => {
            let actualMsg = carService.isItExpensive("Transmission");
            let expectedMsg = `The issue with the car is more severe and it will cost more money`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the issue parameter is something else", () => {
            let actualMsg = carService.isItExpensive("Tire");
            let expectedMsg = `The overall price will be a bit cheaper`;

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the discount functionality", () => {
        it("Testing if the first parameter is not a number", () => {
            assert.throw(() => {
                carService.discount("8", 12);
            })
        })

        it("Testing if the second parameter is not a number", () => {
            assert.throw(() => {
                carService.discount(8, "12");
            })
        })

        it("Testing if the first parameter is less than 2", () => {
            let actualMsg = carService.discount(1, 23);
            let expectedMsg = "You cannot apply a discount";

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing if the first parameter equals to 2", () => {
            let actualMsg = carService.discount(2, 23);
            let expectedMsg = "You cannot apply a discount";

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing if the first parameter is more than 2 but less than 7", () => {
            let actualMsg = carService.discount(5, 20);
            let expectedMsg = `Discount applied! You saved 3$`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing if the first parameter equals to 7", () => {
            let actualMsg = carService.discount(7, 20);
            let expectedMsg = `Discount applied! You saved 3$`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing if the first parameter is more than 7", () => {
            let actualMsg = carService.discount(10, 20);
            let expectedMsg = `Discount applied! You saved 6$`;

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the partsToBuy functionality", () => {
        it("Testing the case where the first parameter is not an array", () => {
            assert.throw(() => {
                carService.partsToBuy("Steering wheel, Tire, Pads", ["Steering wheel", "Tire", "Pads"]);
            })
        })

        it("Testing the case where the second parameter is not an array", () => {
            assert.throw(() => {
                carService.partsToBuy(["Steering wheel", "Tire", "Pads"], "Steering wheel");
            })
        })

        it("Testing the case where the first parameter is empty", () => {
            let actualResult = carService.partsToBuy([], []);
            let expectedResult = 0;

            assert.equal(actualResult, expectedResult);
        })

        it("Testing if the functionality is working properly", () => {
            let actualResult = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]);
            let expectedResult = 145;

            assert.equal(actualResult, expectedResult);
        })

        it("Testing if the functionality is working properly again with another data", () => {
            let actualResult = carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"]);
            let expectedResult = 375;

            assert.equal(actualResult, expectedResult);
        })
    })
})