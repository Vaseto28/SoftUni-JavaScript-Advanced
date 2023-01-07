function factory(data){
    let juices = new Map();

    for (let currEntry of data){
        let [currFruit, currQuantity] = currEntry.split(' => ');
        
        if (juices[currFruit] === undefined){
            juices[currFruit] = 0;
        }
        
        juices[currFruit] += Number(currQuantity);
    }
    
    let result = '';
    for (let currJuice in juices){
        let currBottles = Math.trunc(juices[currJuice] / 1000);

        if (currBottles !== 0){
            result += `${currJuice} => ${currBottles}\n`;
        }
    }

    return result.trimEnd();
}

console.log(factory(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']));