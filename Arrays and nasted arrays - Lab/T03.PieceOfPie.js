function solve(pies, firstPie, secondPie){
    let indexOfFirstPie = pies.indexOf(firstPie);
    let indexOfSecondPie = pies.indexOf(secondPie);

    let result = pies.slice(indexOfFirstPie, indexOfSecondPie + 1);
    return result;
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));