function solve(numbers){
    let numbersInOddPositions = numbers.filter((x, i) => i % 2 == 1).map(x => x * 2);
    return numbersInOddPositions.reverse();
}

console.log(solve([3, 0, 10, 4, 7, 3]));