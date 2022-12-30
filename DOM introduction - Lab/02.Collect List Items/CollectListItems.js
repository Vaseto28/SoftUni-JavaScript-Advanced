function extractText() {
    let texts = document.querySelectorAll("ul#items li");
    let textBox = document.querySelector("#result");

    for (let text of texts){
        textBox.value += text.textContent + "\n";
    }
}