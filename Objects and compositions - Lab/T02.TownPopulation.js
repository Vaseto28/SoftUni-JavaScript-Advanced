function solve(towns){
let registry = {};

    for (let kvp of towns){
    let name = kvp.split(' <-> ')[0];

        if (registry[name] === undefined){
            registry[name] = Number(kvp.split(' <-> ')[1]);
        }
        else{
            registry[name] += Number(kvp.split(' <-> ')[1]);
        }
    }

    for (let town in registry){
        console.log(`${town} : ${registry[town]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);