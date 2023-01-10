let library = require('./library');
let {assert} = require('chai');

describe("Testing the library", () => {
    describe("Tetsing the calcPriceOfBook functionality", () => {
        it("Testing the case where the 'nameOfBook' parameter is not a string", () => {
            assert.throw(() => {
                library.calcPriceOfBook(21, 4);
            });
        })

        it("Testing the case where the 'nameOfBook' parameter is not a string", () => {
            assert.throw(() => {
                library.calcPriceOfBook([21, 12, 344], 4);
            });
        })

        it("Testing the case where the 'year' parameter is not a number", () => {
            assert.throw(() => {
                library.calcPriceOfBook(21, "4");
            });
        })

        it("Testing the case where the 'year' parameter is not an integer number", () => {
            assert.throw(() => {
                library.calcPriceOfBook(21, 4.213);
            });
        })

        it("Testing the case where the 'year' parameter is less than 1980", () => {
            let actualMsg = library.calcPriceOfBook("Angel", 1900);
            let expectedMsg = `Price of Angel is 10.00`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the 'year' parameter equals to 1980", () => {
            let actualMsg = library.calcPriceOfBook("Angel", 1980);
            let expectedMsg = `Price of Angel is 10.00`;

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the 'year' parameter is more than 1980", () => {
            let actualMsg = library.calcPriceOfBook("Angel", 2022);
            let expectedMsg = `Price of Angel is 20.00`;

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the 'findBook' functionality", () => {
        it("Testing the case where the 'booksArr' parameter's length equals to zero", () => {
            assert.throw(() => {
                library.findBook([], 12);
            })
        })

        it("Testing the case where the given array includes the given book", () => {
            let actualMsg = library.findBook(["Angel", "Tisd", "KKK"], "KKK");
            let expectedMsg = "We found the book you want.";

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the given array doesn't includes the given book", () => {
            let actualMsg = library.findBook(["Angel", "Tisd", "KKK"], "AA");
            let expectedMsg = "The book you are looking for is not here!";

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the arrangeTheBooks fiunctionality", () => {
        it("Testing the case where the given parameter is not a number", () => {
            assert.throw(() => {
                library.arrangeTheBooks("12");
            })
        })

        it("Testing the case where the given parameter is an integer", () => {
            assert.throw(() => {
                library.arrangeTheBooks(12.341);
            })
        })

        it("Testing the case where the given parameter is less than zero", () => {
            assert.throw(() => {
                library.arrangeTheBooks(-12);
            })
        })

        it("Testing the case where the given param equals to 40", () => {
            let actualMsg = library.arrangeTheBooks(40);
            let expectedMsg = "Great job, the books are arranged.";

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the given param is less than 40", () => {
            let actualMsg = library.arrangeTheBooks(23);
            let expectedMsg = "Great job, the books are arranged.";

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the given param is more than 40", () => {
            let actualMsg = library.arrangeTheBooks(48);
            let expectedMsg = "Insufficient space, more shelves need to be purchased.";

            assert.equal(actualMsg, expectedMsg);
        })
    })
})