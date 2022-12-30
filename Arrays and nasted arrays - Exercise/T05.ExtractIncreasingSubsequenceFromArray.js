function solve(numbers){
    let currBiggestNum = numbers[0];
    let result = [];

    for (let number of numbers){
        if (number >= currBiggestNum){
            currBiggestNum = number;
            result.push(currBiggestNum);
        }
    }

    return result;
}

console.log(solve([1, 
    2, 
    3,
    4]));