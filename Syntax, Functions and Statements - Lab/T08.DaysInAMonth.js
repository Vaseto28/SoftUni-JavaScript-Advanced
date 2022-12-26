function daysInAMonth(monthNum, year){
    let result;

    if (year%4===0 && monthNum === 2){
        result = 29;
    }
    else if (year%4!==0 && monthNum === 2){
        result = 28;
    }

    if (monthNum === 1 || monthNum === 3 ||
        monthNum === 5 || monthNum === 7 ||
        monthNum === 8 || monthNum === 10 || monthNum === 12){
            result = 31;
    }
    else if (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11){
            result = 30;
    }

    console.log(result);
}