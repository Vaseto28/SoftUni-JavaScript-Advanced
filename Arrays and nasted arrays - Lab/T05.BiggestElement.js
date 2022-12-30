function solve(matrix){
    let maxValue = Number.MIN_SAFE_INTEGER;
    for (let array of matrix){
        for (let number of array){
            if (number > maxValue){
                maxValue = number;
            }
        }
    } 

    return maxValue;
}

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));