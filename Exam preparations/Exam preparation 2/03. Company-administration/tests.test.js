let companyAdministration = require("./companyAdministration");
let {assert} = require('chai');

describe("Tests for companyAdministration", () => {
    describe("Testing the hiringEmployee functionality", () => {
        it("Testing the case where the position parameter is not 'programmer'", () => {
            assert.throw(() => {
                companyAdministration.hiringEmployee("Name", "Sandwich maker", 12);
            })
        })

        it("Testing the case where the position parameter is programmer and the ageOfExperience parameter is more than 3", () => {
            let actualMsg = companyAdministration.hiringEmployee("Angel", 'Programmer', 5);
            let expectedMsg = `Angel was successfully hired for the position Programmer.`

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the position parameter is programmer and the ageOfExperience parameter equals to 3", () => {
            let actualMsg = companyAdministration.hiringEmployee("Angel", 'Programmer', 3);
            let expectedMsg = `Angel was successfully hired for the position Programmer.`

            assert.equal(actualMsg, expectedMsg);
        })

        it("Testing the case where the position parameter is programmer and the ageOfExperience parameter less than 3", () => {
            let actualMsg = companyAdministration.hiringEmployee("Angel", 'Programmer', 1);
            let expectedMsg = `Angel is not approved for this position.`

            assert.equal(actualMsg, expectedMsg);
        })
    })

    describe("Testing the calculateSalary functionality", () => {
        it("Testing if the hours parameter is not a number", () => {
            assert.throw(() => {
                companyAdministration.calculateSalary("12");
            })
        })

        it("Testing if the hours parameter is less than zero", () => {
            assert.throw(() => {
                companyAdministration.calculateSalary(-12);
            })
        })

        it("Testing if the hours parameter is above 160", () => {
            let actualSalary = companyAdministration.calculateSalary(200);
            let expectedSalary = 4000;

            assert.equal(actualSalary, expectedSalary);
        })

        it("Testing if the hours parameter is above 0, but less than 160", () => {
            let actualSalary = companyAdministration.calculateSalary(100);
            let expectedSalary = 1500;

            assert.equal(actualSalary, expectedSalary);
        })
    })

    describe("Testing the firedEmployee functionality", () => {
        it("Testing if the employees param is not an array", () => {
            assert.throw(() => {
                companyAdministration.firedEmployee("Angel, Angelina", 2);
            })
        })

        it("Testing if the index param is not a number", () => {
            assert.throw(() => {
                companyAdministration.firedEmployee(["Angel", "Angelina"], "2");
            })
        })

        it("Testing if the index param is less than 0", () => {
            assert.throw(() => {
                companyAdministration.firedEmployee(["Angel", "Angelina"], -2);
            })
        })

        it("Testing if the index param is grater than the employees.length param", () => {
            assert.throw(() => {
                companyAdministration.firedEmployee(["Angel", "Angelina"], 7);
            })
        })

        it("Testing if the index param equals to employees.length param", () => {
            assert.throw(() => {
                companyAdministration.firedEmployee(["Angel", "Angelina"], 2);
            })
        })

        it("Testing the functionality with valid data", () => {
            let employees = ["Angel", "Antoniya", "Iva", "Iliyan"];
            let index = 0;

            let actualResult = companyAdministration.firedEmployee(employees, index);
            let expectedResult = ["Antoniya", "Iva", "Iliyan"].join(", ");

            assert.deepEqual(actualResult, expectedResult);
        })
    })
})