class CarDealership {
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage) {
        if(!model || !Number.isInteger(horsepower) || horsepower < 0 || typeof(price) !== 'number' || price < 0 || typeof(mileage) !== 'number' || mileage < 0){
            throw new Error("Invalid input!");
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar (model, desiredMileage) {
        let car = this.availableCars.find(x => x.model === model);
        if(!car){
            throw new Error(`${model} was not found!`);
        }

        if(car.mileage > desiredMileage){
            let diff = car.mileage - desiredMileage;

            if(diff <= 40000){
                car.price -= car.price * 0.05;
            }
            else{
                car.price -= car.price * 0.10;
            }
        }

        this.totalIncome += car.price;
        this.availableCars.splice(this.availableCars.indexOf(car), 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price
        });

        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar () {
        if(!this.availableCars){
            return "There are no available cars";
        }

        let result = '-Available cars:\n';

        result += this.availableCars.map(x => `---${x.model} - ${x.horsepower} HP - ${x. mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`).join('\n');

        return result.trimEnd();
    }

    salesReport (criteria) {
        if(criteria !== 'horsepower' && criteria !== 'model'){
            throw new Error("Invalid criteria!");
        }

        if(criteria === 'horsepower'){
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        else{
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        result += `-${this.soldCars.length} cars sold:\n`;

        result += this.soldCars.map(x => `---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`).join('\n');

        return result.trimEnd();
    }
}