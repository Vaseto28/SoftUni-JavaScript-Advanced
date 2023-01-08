class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if (spaceRequired > this.spaceAvailable){
            throw new Error("Not enough space in the garden.");
        }
        
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity){
        let plant = this.plants.find(x => x.plantName === plantName);

        if(!plant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(plant.ripe){
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if(quantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        plant.ripe = true;
        plant.quantity = quantity;

        let returnMsg = quantity === 1 ? 
        `${quantity} ${plantName} has successfully ripened.` : 
        `${quantity} ${plantName}s have successfully ripened.`;

        return returnMsg;
    }

    harvestPlant(plantName){
        let plant = this.plants.find(x => x.plantName === plantName);

        if(!plant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(!plant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.plants = this.plants.filter(x => x.plantName !== plantName);

        this.storage.push({
            plantName: plant.plantName,
            quantity: plant.quantity 
        });

        this.spaceAvailable += plant.spaceRequired;
        
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport(){
        let report = '';

        report += `The garden has ${this.spaceAvailable} free space left.\n`;

        report += `Plants in the garden: ${this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(x => x.plantName).join(", ")}\n`;

        if(!this.storage.length){
            report += "Plants in storage: The storage is empty."
        }
        else{
            report += `Plants in storage: ${this.storage.map(x => `${x.plantName} (${x.quantity})`).join(", ")}`;
        }

        return report.trim();
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());