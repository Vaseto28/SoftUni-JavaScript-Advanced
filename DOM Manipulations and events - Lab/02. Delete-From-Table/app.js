function deleteByEmail() {
    let table = document.querySelectorAll("tbody tr");
    let input = document.getElementsByTagName("input")[0];

    for (let tr of table){
        if (tr.children[1].textContent === input.value){
            tr.remove();
            document.getElementById("result").innerText = 'Deleted.';
            return;
        }
    }

    document.getElementById("result").innerText = 'Not found.';
}