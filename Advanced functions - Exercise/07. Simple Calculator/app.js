function calculator() {
    let num1;
    let num2;
    let resultField;

    return {
        init: (selectorForNum1, selectorForNum2, resultSelector) => {
            num1 = document.querySelector(selectorForNum1);
            num2 = document.querySelector(selectorForNum2);
            resultField = document.querySelector(resultSelector);
        },
        add: () => {
            let firstNum = Number(num1.value);
            let secondNum = Number(num2.value);
            let sum = firstNum + secondNum;
            resultField.value = sum;
        },
        subtract: () => {
            let firstNum = Number(num1.value);
            let secondNum = Number(num2.value);
            let subtraction = firstNum - secondNum;
            resultField.value = subtraction;
        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result');