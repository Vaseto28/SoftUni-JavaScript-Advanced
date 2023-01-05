function solve(data){
    let result = [];

    if (data.length <= 0){
        return result;
    }

    for (let rawHero of data){
        let currHero = {
            name: rawHero.split(' / ')[0],
            level: Number(rawHero.split(' / ')[1]),
            items: rawHero.split(' / ')[2].split(', ')
        };

        result.push(currHero);
    }

    return JSON.stringify(result);
}

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));