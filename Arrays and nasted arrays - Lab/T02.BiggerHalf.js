function solve(numbers){
    numbers.sort((x, y) => x - y);

    let result = numbers.slice(parseInt(numbers.length/2));
    return result;
}

solve(1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 2, 3,1243,4245 ,24545 ,43534 ,53);