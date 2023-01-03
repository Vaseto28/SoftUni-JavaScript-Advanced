function solution(){
    let newRobot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0, 
        flavour: 0
    };

    return function manager(arguments){
        let splittedArgs = arguments.split(' ');

        if (splittedArgs[0] === 'restock'){

            let microElement = splittedArgs[1];
            let quantity = Number(splittedArgs[2]);

            newRobot[microElement] += quantity;
            return 'Success';
        }
        else if (splittedArgs[0] === 'prepare'){
            let recipe = splittedArgs[1];
            let quantity = Number(splittedArgs[2]);
            let neededMicroelements = {};

            if (recipe === 'apple'){
                neededMicroelements['carbohydrate'] = 1 * quantity;
                neededMicroelements['flavour'] = 2 * quantity;
            }
            else if (recipe === 'lemonade'){
                neededMicroelements['carbohydrate'] = 10 * quantity;
                neededMicroelements['flavour'] = 20 * quantity;
            }
            else if (recipe === 'burger'){
                neededMicroelements['carbohydrate'] = 5 * quantity;
                neededMicroelements['fat'] = 7 * quantity;
                neededMicroelements['flavour'] = 3 * quantity;
            }
            else if (recipe === 'eggs'){
                neededMicroelements['protein'] = 5 * quantity;
                neededMicroelements['fat'] = 1 * quantity;
                neededMicroelements['flavour'] = 1 * quantity;
            }
            else if (recipe === 'turkey'){
                neededMicroelements['carbohydrate'] = 10 * quantity;
                neededMicroelements['protein'] = 10 * quantity;
                neededMicroelements['fat'] = 10 * quantity;
                neededMicroelements['flavour'] = 10 * quantity;
            }

            let isPrepared = true;
            for (let currElement in neededMicroelements){
                if (newRobot[currElement] >= neededMicroelements[currElement]){
                    newRobot[currElement] -= neededMicroelements[currElement];
                }
                else{
                    isPrepared = false;
                    return `Error: not enough ${currElement} in stock`;
                    break;
                }
            }
            if (isPrepared){
                return 'Success';
            }
        }
        else if (splittedArgs[0] === 'report'){
            return `protein=${newRobot.protein} carbohydrate=${newRobot.carbohydrate} fat=${newRobot.fat} flavour=${newRobot.flavour}`;
        }
    }
}

let manager = solution ();
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("report"));