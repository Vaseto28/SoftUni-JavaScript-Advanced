function solve(data){
    let result = [];

    for (let i = 1; i < data.length; i++){
        let currEl = data[i];
        currEl = currEl.slice(2, currEl.length - 2).split(' | ');

        let currObj = {};
        currObj["Town"] = currEl[0];
        currObj["Latitude"] = currEl[1];
        currObj["Longtitude"] = currEl[2];

        result.push(currObj);
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);