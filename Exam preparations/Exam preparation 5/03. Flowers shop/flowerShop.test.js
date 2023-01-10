let flowerShop = require('./flowerShop');
let {assert} = require('chai');

describe("Testing the flowerShop functionalities", () => {
    describe("Testing the calcPriceOfFlowers functionality", () => {
        it("Testing the case where the flower parameter is not a string", () => {
            assert.throw(() => {
                flowerShop.calcPriceOfFlowers(12, 45, 10);
            })
        })

        it("Testing the case where the price parameter is not an integer", () => {
            assert.throw(() => {
                flowerShop.calcPriceOfFlowers("Rose", 45.9, 10);
            })
        })

        it("Testing the case where the price parameter is not a number", () => {
            assert.throw(() => {
                flowerShop.calcPriceOfFlowers("Rose", "Angel", 10);
            })
        })

        it("Testing the case where the quantity parameter is not an integer", () => {
            assert.throw(() => {
                flowerShop.calcPriceOfFlowers("Rose", 45, 10.3);
            })
        })

        it("Testing the case where the quantity parameter is not a number", () => {
            assert.throw(() => {
                flowerShop.calcPriceOfFlowers("Rose", 45, "3");
            })
        })

        it("Testing the logic with valid parameters", () => {
            let actualMsg = flowerShop.calcPriceOfFlowers("Rose", 20, 10);
            let expectedMsg = `You need $200.00 to buy Rose!`;

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the checkFlowersAvailable functionality", () => {
        it("Testing the case where the given flower doesn't exist in the given garden", () => {
            let actualMsg = flowerShop.checkFlowersAvailable("Tulip", ["Rose", "Lily", "Orchid"]);
            let expectedMsg = `The Tulip are sold! You need to purchase more!`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the given flower exists in the given garden", () => {
            let actualMsg = flowerShop.checkFlowersAvailable("Lily", ["Rose", "Lily", "Orchid"]);
            let expectedMsg = `The Lily are available!`;

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the sellFlowers functionality", () => {
        it("Testing the case where the garden parameter is not an array", () => {
            assert.throw(() => {
                flowerShop.sellFlowers(12, 6);
            })
        })

        it("Testing the case where the space parameter is not a number", () => {
            assert.throw(() => {
                flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "6");
            })
        })

        it("Testing the case where the space parameter is not an integer", () => {
            assert.throw(() => {
                flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 7.89);
            })
        })

        it("Testing the case where the space parameter is less than 0", () => {
            assert.throw(() => {
                flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -2);
            })
        })

        it("Testing the case where the space parameter equals to the garden.length", () => {
            assert.throw(() => {
                flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3);
            })
        })

        it("Testing the case where the space parameter is grater than the garden.length", () => {
            assert.throw(() => {
                flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 67);
            })
        })

        it("Testing the logic with valid parameters and index at the middle of the garden", () => {
            let actualResult = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1);
            let expectedResult = "Rose / Orchid";

            assert.equal(actualResult, expectedResult);
        })

        it("Testing the logic with valid parameters and index at the beginning of the garden", () => {
            let actualResult = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0);
            let expectedResult = "Lily / Orchid";

            assert.equal(actualResult, expectedResult);
        })

        it("Testing the logic with valid parameters and index at the end of the garden", () => {
            let actualResult = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2);
            let expectedResult = "Rose / Lily";

            assert.equal(actualResult, expectedResult);
        })
    })
})