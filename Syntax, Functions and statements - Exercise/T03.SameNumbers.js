function findSameNumbers(num){
    let workingNum = num.toString();
    let isDifferent = true;
    let firstDigit = parseInt(workingNum[0]);
    let sum = firstDigit;

    for (let i = 1; i<workingNum.length; i++){
        if (parseInt(workingNum[i]) !== firstDigit){
            isDifferent = false;
        }

        sum+=parseInt(workingNum[i]);
    }

    console.log(isDifferent);
    console.log(sum);
}