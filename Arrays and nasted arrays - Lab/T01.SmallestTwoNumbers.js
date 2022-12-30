function solve(array){
    array.sort((x, y) => x - y);
    let num1 = array[0];
    let num2 = array[1];
    console.log(num1 + ' ' + num2);
}

solve([3, 2, 31]);