function colorize() {
    let rows = document.querySelectorAll("table tr");
    
    for (let i = 1; i < rows.length; i += 2){
        let currRow = rows[i];
        currRow.style.background = "Teal";
    }
}