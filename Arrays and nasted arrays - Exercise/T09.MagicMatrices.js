function solve(matrix){
    let ismagical = true;
    let n = matrix[0].length;

    let sumsOfRows = [];
    for (let row = 0; row < n; row++){
        let currSum = 0;

        for (let col = 0; col < n; col++){
            currSum += matrix[row][col];
        }

        sumsOfRows.push(currSum);
    }

    let sumsOfCols = [];
    for (let col = 0; col < n; col++){
        let currSum = 0;

        for (let row = 0; row < n; row++){
            currSum += matrix[col][row];
        }

        sumsOfCols.push(currSum);
    }

    let allSums = sumsOfRows.concat(sumsOfCols);

    let totalSum = 0;
    for (let sum of allSums){
        totalSum += sum;
    }

    if (totalSum % allSums.length === 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}