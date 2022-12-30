function subtract() {
    let firstNum = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);

    let subtraction = firstNum - secondNumber;
    document.getElementById("result").textContent = subtraction;
}