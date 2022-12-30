function cooking(startingNum, opOne, opTwo, opThree, opFour, opFive){
    let result = Number(startingNum);

    let operationsArray = [opOne, opTwo, opThree, opFour, opFive];

    let operations = {
        chop() { result /= 2; },
        dice() { result = Math.sqrt(result); },
        spice() { result++; },
        bake() { result *= 3; }, 
        fillet() { result -= result * 0.2; }
    };

    for (let i = 0; i < operationsArray.length; i++){
        let currOp = operationsArray[i];

        operations[currOp]();

        console.log(result)
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');