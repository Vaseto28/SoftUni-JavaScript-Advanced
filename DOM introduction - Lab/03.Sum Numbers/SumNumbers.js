function calc() {
    let firstNum = document.querySelector("#num1").value;
    let secondNum = document.querySelector("#num2").value;

    let sum = Number(firstNum) + Number(secondNum);
    document.querySelector("#sum").value = sum;
}
