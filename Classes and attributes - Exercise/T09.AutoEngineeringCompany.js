function makeRegister(data){
    let register = new Map();

    for (let currEntry of data){
        let [carBrand, carModel, producedCars] = currEntry.split(' | ');

        if (register[carBrand] === undefined){
            register[carBrand] = new Map();
        }

        if (register[carBrand][carModel] === undefined){
            register[carBrand][carModel] = 0;
        }

        register[carBrand][carModel] += Number(producedCars);
    }

    let result = '';
    for (let currCarBrand in register){
        result += `${currCarBrand}\n`;

        for (let currCar in register[currCarBrand]){
            result += `###${currCar} -> ${register[currCarBrand][currCar]}\n`;
        }
    }

    return result.trimEnd();
}

console.log(makeRegister(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']));