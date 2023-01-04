function solve(arr, startIndex, endIndex){
    let sum = 0;

    if (!Array.isArray(arr)){
        return NaN;
    }

    if (startIndex < 0){
        startIndex = 0;
    }

    if (endIndex >= arr.length){
        endIndex = arr.length - 1;
    }

    let numbers = arr.slice(startIndex, endIndex + 1);


    for (let num of numbers){
        sum += Number(num);
    }

    return sum;
}

solve([10, 20, 30, 40, 50, 60], 3, 300)