let rentCar = require('./rentCar');
let {assert} = require('chai');

describe("Testing rentCar", () => {
    describe("Testing the searchCar functionality", () => {
        it("Testing with invalid type of the first parameter", () => {
            assert.throw(() => {
                rentCar.searchCar("car1, car2, car3", "Angel");
            })
        })

        it("Testing with invalid type of the second parameter", () => {
            assert.throw(() => {
                rentCar.searchCar(["car1", "car2", "car3"], 20);
            })
        })

        it("Testing if the car has not been found", () => {
            assert.throw(() => {
                rentCar.searchCar(["Volkswagen", "Bmw", "Mercedes"], "Ferrari");
            })
        })

        it("Testing if there is one occurance", () => {
            let actualMsg = rentCar.searchCar(["Volkswagen", "Bmw", "Mercedes"], "Mercedes");
            let expectedMsg = `There is 1 car of model Mercedes in the catalog!`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing if there is many occurances", () => {
            let actualMsg = rentCar.searchCar(["Volkswagen", "Bmw", "Mercedes", "Mercedes", "Mercedes"], "Mercedes");
            let expectedMsg = `There is 3 car of model Mercedes in the catalog!`;

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the calculatePriceOfCar functionality", () => {
        it("Testing the case where the model is not a string", () => {
            assert.throw(() => {
                rentCar.calculatePriceOfCar(20, 12);
            })
        })

        it("Testing the case where the days is not a number", () => {
            assert.throw(() => {
                rentCar.calculatePriceOfCar("Mercedes", "12");
            })
        })

        it("Testing the case where the given model is not in the catalogue", () => {
            assert.throw(() => {
                rentCar.calculatePriceOfCar("Porsche", 3);
            })
        })

        it("Testing the case where the given model is in the catalogue", () => {
            let actualMsg = rentCar.calculatePriceOfCar("Audi", 10);
            let expectedMsg = `You choose Audi and it will cost $360!`
        })
    })

    describe("Testing the checkBudget functionality", () => {
        it("Testing the case where the costPerDay parameter is not a number", () => {
            assert.throw(() => {
                rentCar.checkBudget("12", 34, 67);
            })
        })

        it("Testing the case where the days parameter is not a number", () => {
            assert.throw(() => {
                rentCar.checkBudget(12, "34", 67);
            })
        })

        it("Testing the case where the budget parameter is not a number", () => {
            assert.throw(() => {
                rentCar.checkBudget(12, 34, "67");
            })
        })

        it("Testing if the budget is more than the cost", () => {
            let actualMsg = rentCar.checkBudget(5, 10, 70);
            let expectedMsg = `You rent a car!`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing if the budget equals to the cost", () => {
            let actualMsg = rentCar.checkBudget(5, 10, 50);
            let expectedMsg = `You rent a car!`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing if the budget is less than the cost", () => {
            let actualMsg = rentCar.checkBudget(5, 10, 20);
            let expectedMsg = 'You need a bigger budget!';

            assert.equal(actualMsg, expectedMsg);
        })
    })
})