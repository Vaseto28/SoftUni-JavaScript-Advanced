function addItem() {
    let ul = document.getElementById("items");
    let text = document.getElementById("newItemText");
    let newElement = document.createElement("li");
    newElement.innerText = text.value;

    debugger;
    let remove = document.createElement("remove");
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener('click', removeElement);

    newElement.appendChild(remove);
    ul.appendChild(newElement);

    function removeElement(){
        newElement.remove();
    }
}
