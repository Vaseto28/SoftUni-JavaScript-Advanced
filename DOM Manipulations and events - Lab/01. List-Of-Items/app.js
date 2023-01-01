function addItem() {
    let list = document.getElementById("items");
    let input = document.getElementById("newItemText");
    let newElement = document.createElement("li");
    newElement.innerText = input.value;
    list.appendChild(newElement);
}