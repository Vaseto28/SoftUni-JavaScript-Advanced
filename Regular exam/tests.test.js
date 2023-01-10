let chooseYourCar = require('./chooseYourCar');
let {assert} = require('chai');

it("Tests for year", () => {
    assert.throw(() => {
        chooseYourCar.choosingType("Sedan", "Blue", 1889);
    })
})

it("Tests for bigger year", () => {
    assert.throw(() => {
        chooseYourCar.choosingType("Sedan", "Blue", 2090);
    })
})

it("Throw error if it is not sedan", () => {
    assert.throw(() => {
        chooseYourCar.choosingType("Angel", "Blue", 1988);
    })
})

it('Should work first way', () => {
    let expectedMsg = chooseYourCar.choosingType("Sedan", "Blue", 2010);
    let actualMsg = `This Blue Sedan meets the requirements, that you have.`;

    assert.equal(expectedMsg, actualMsg);
})

it('Should work first good way', () => {
    let expectedMsg = chooseYourCar.choosingType("Sedan", "Blue", 2020);
    let actualMsg = `This Blue Sedan meets the requirements, that you have.`;

    assert.equal(expectedMsg, actualMsg);
})

it('Should work second good way', () => {
    let expectedMsg = chooseYourCar.choosingType("Sedan", "Blue", 2009);
    let actualMsg = `This Sedan is too old for you, especially with that Blue color.`;

    assert.equal(expectedMsg, actualMsg);
})

it('throw error cases', () => {
    assert.throw(() => {
        chooseYourCar.brandName("Angel", 1988);
    })
})

it('throw error cases 1', () => {
    assert.throw(() => {
        chooseYourCar.brandName(["Angel"], "1988");
    })
})

it('throw error cases 2', () => {
    assert.throw(() => {
        chooseYourCar.brandName(["Angel"], 28.5);
    })
})

it('throw error cases 3', () => {
    assert.throw(() => {
        chooseYourCar.brandName(["Angel"], -89);
    })
})

it('throw error cases 4', () => {
    assert.throw(() => {
        chooseYourCar.brandName(["Angel"], 89);
    })
})

it("tesxt functionality", () => {
    let expectedMsg = chooseYourCar.brandName(["Mercedes", "BMW", "Antoniya"], 2);
    let actualMsg = "Mercedes, BMW";
    assert.equal(expectedMsg, actualMsg);
})

it('throw error cases 0', () => {
    assert.throw(() => {
        chooseYourCar.carFuelConsumption("23", 2);
    })
})

it('throw error cases 1', () => {
    assert.throw(() => {
        chooseYourCar.carFuelConsumption(-90, 2);
    })
})

it('throw error cases 2', () => {
    assert.throw(() => {
        chooseYourCar.carFuelConsumption(0, 2);
    })
})

it('throw error cases 3', () => {
    assert.throw(() => {
        chooseYourCar.carFuelConsumption(22, "23");
    })
})

it('throw error cases 4', () => {
    assert.throw(() => {
        chooseYourCar.carFuelConsumption(90, -2);
    })
})

it('throw error cases 5', () => {
    assert.throw(() => {
        chooseYourCar.carFuelConsumption(12, 0);
    })
})

it('work as expected 0', () => {
    let expectedMsg = `The car is efficient enough, it burns 7.00 liters/100 km.`;
    let actualMsg = chooseYourCar.carFuelConsumption(1, 0.07);

    assert.equal(actualMsg, expectedMsg);
})

it('work as expected 1', () => {
    let expectedMsg = `The car is efficient enough, it burns 5.00 liters/100 km.`;
    let actualMsg = chooseYourCar.carFuelConsumption(1, 0.05);

    assert.equal(actualMsg, expectedMsg);
})

it('work as expected 2', () => {
    let expectedMsg = `The car burns too much fuel - 9.00 liters!`;
    let actualMsg = chooseYourCar.carFuelConsumption(1, 0.09);

    assert.equal(actualMsg, expectedMsg);
})