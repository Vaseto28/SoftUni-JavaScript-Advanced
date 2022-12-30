function solve(matrix){
    let mainDiagonalSum = 0;
    let secondaryDiagonalsum = 0;
    
    for (let row = 0; row < matrix[0].length; row++){
        for (let col = 0; col < matrix[0].length; col++){
            if (row === col){
                mainDiagonalSum += matrix[row][col];
            }

            if (row + col === matrix[0].length - 1){
                secondaryDiagonalsum += matrix[row][col];
            }
        }
    }

    console.log(mainDiagonalSum + " " + secondaryDiagonalsum);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, -89]]);