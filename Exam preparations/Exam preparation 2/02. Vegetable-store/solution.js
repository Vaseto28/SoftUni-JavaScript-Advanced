class VegetableStore{
    constructor(owner, lacation){
        this.owner =  owner;
        this.location = lacation;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables){
        let returnMsg = 'Successfully added ';
        let types = [];

        for(let entry of vegetables){
            let [type, quantity, price] = entry.split(" ");

            let currVegetable = this.availableProducts.find(x => x.type === type);
            if(currVegetable){
                currVegetable.quantity += Number(quantity);

                if(currVegetable.price < price){
                    currVegetable.price = Number(price);
                }
            }
            else{
                this.availableProducts.push({
                    type,
                    quantity: Number(quantity),
                    price: Number(price)
                });
            }

            if(types.indexOf(type) === -1){
                types.push(type);
            }
        }

        returnMsg += `${types.join(", ")}`;
        return returnMsg;
    }

    buyingVegetables(selectedProducts){
        let totalPrice = 0;

        for(let entry of selectedProducts){
            let [type, quantity] = entry.split(" ");

            let currProduct = this.availableProducts.find(x => x.type === type);
            if(!currProduct){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if(currProduct.quantity < quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let priceForTheCurrProduct = currProduct.price * quantity;
            currProduct.quantity -= quantity;
            totalPrice += priceForTheCurrProduct;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity){
        let currProduct = this.availableProducts.find(x => x.type === type);
        if(!currProduct){
            throw new Error(`${type} is not available in the store.`);
        }

        //!!!
        if(currProduct.quantity < quantity){
            currProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        else{
            currProduct.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision(){
        let returnMsg = "Available vegetables:\n";

        returnMsg += this.availableProducts.sort((x,y) => x.price - y.price).map(x => `${x.type}-${x.quantity}-$${x.price}`).join("\n") + '\n'; 

        returnMsg += `The owner of the store is ${this.owner}, and the location is ${this.location}.`

        return returnMsg;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());