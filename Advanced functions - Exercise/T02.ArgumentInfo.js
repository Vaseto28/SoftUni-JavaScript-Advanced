function resume(...arguments){
    let counts = {};
    for (let currArg of arguments){
        console.log(`${typeof(currArg)}: ${currArg}`);

        if (counts[typeof(currArg)] === undefined){
            counts[typeof(currArg)] = 0;
        }

        counts[typeof(currArg)]++;
    }

    let buff = '';
    for (let currProp in counts){
        buff += `${currProp} = ${counts[currProp]}`;
    }

    console.log(buff);
}

resume({ name: 'bob'}, 3.333, 9.999);