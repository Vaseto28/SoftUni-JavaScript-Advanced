let bookSelection = require('./solution');
let {assert} = require('chai');

describe("Testing bookSelection", () => {
    describe("Testing the isGenreSuitable functionality", () => {
        it("Testing with age lower than 12 and 'Horror' genre", () => {
            let expectedMsg = `Books with Horror genre are not suitable for kids at 11 age`;
            let actualMsg = bookSelection.isGenreSuitable("Horror", 11);

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing with age eqals to 12 and 'Horror' genre", () => {
            let expectedMsg = `Books with Horror genre are not suitable for kids at 12 age`;
            let actualMsg = bookSelection.isGenreSuitable("Horror", 12);

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing with age lower than 12 and 'Thriller' genre", () => {
            let expectedMsg = `Books with Thriller genre are not suitable for kids at 11 age`;
            let actualMsg = bookSelection.isGenreSuitable("Thriller", 11);

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing with age eqals to 12 and 'Thriller' genre", () => {
            let expectedMsg = `Books with Thriller genre are not suitable for kids at 12 age`;
            let actualMsg = bookSelection.isGenreSuitable("Thriller", 12);

            assert.equal(actualMsg, expectedMsg);
        })

        it("It should return another message in any other case", () => {
            let actualMsg = bookSelection.isGenreSuitable("Thriller", 88);
            let expectedMsg = "Those books are suitable";

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the isItAffordable functionality", () => {
        it("Testing with invalid price type", () => {
            assert.throw(() => {
                bookSelection.isItAffordable("12131", 90);
            })
        })

        it("Testing with invalid budget type", () => {
            assert.throw(() => {
                bookSelection.isItAffordable(12, "90");
            })
        })

        it("Testing the case where the budget is less than the price", () => {
            let actualMsg = bookSelection.isItAffordable(100, 90);
            let expectedMsg = "You don't have enough money";

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the budget is more than the price", () => {
            let actualMsg = bookSelection.isItAffordable(100, 900);
            let expectedMsg = `Book bought. You have 800$ left`;

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the suitableTitles functionality", () => {
        it("Testing with invalid array type", () => {
            assert.throw(() => {
                bookSelection.suitableTitles("[12, 34432, 5]", "12");
            });
        })

        it("Testing with invalid wantedGenre type", () => {
            assert.throw(() => {
                bookSelection.suitableTitles([12, 34432, 5], 12);
            });
        })

        it("Testing the functionality with valid params", () => {
            let array = [{title: "The Da Vinci Code", genre: "Thriller"}, {title: "The Code", genre: "Horror"}, {title: "Hitler", genre: "Horror"}];
            let wantedGenre = "Horror";

            let actualResult = bookSelection.suitableTitles(array, wantedGenre);
            let expectedResult = ["The Code", "Hitler"];

            assert.deepEqual(actualResult, expectedResult);
        })
    })
})
