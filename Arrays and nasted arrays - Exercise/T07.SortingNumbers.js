function solve(numbers){
    numbers.sort((x, y) => x - y);
    let result = [];

    let i = 0;
    while (numbers.length !== 0){
        if (i % 2 == 0){
            result.push(numbers.shift());
        }
        else{
            result.push(numbers.pop());
        }

        i++;
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));