function toggle() {
    let button = document.getElementsByClassName("button")[0];

    if (button.textContent === "More"){
        document.getElementById("extra").style.display = 'block';
        document.getElementsByClassName("button")[0].textContent = "Less";
    }
    else if (button.textContent === "Less"){
        document.getElementById("extra").style.display = 'none';
        document.getElementsByClassName("button")[0].textContent = "More";
    }
}