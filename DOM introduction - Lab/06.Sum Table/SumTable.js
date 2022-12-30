function sumTable() {
    let rows = document.querySelectorAll("table tr");

    let sum = 0;
    for (let i = 1; i < rows.length - 1; i++){
        let currPrice = rows[i].querySelectorAll("td")[1].textContent;
        sum += Number(currPrice);
    }

    rows[rows.length - 1].querySelectorAll("td")[1].textContent = sum;
}