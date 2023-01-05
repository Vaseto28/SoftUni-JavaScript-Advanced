function solve(data){
    let unsortedCatalog = {};

    for (let kvp of data){
        let [name, price] = kvp.split(' : ');

        unsortedCatalog[name] = price;
    }

    for (let pr in unsortedCatalog){
        console.log(pr[0])
        console.log(`  ${pr}: ${unsortedCatalog[pr]}`);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);