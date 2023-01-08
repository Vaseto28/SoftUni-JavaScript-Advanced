function solve() {
    document.getElementById("add").addEventListener('click', add);
    document.getElementById("reset").addEventListener('click', clear);

    let recipientNameField = document.getElementById("recipientName");
    let titleField = document.getElementById("title");
    let messageField = document.getElementById("message");
    let listOfMailsSection = document.getElementById("list");
    let listOfSendMailsSection = document.querySelector("ul.sent-list");
    let deletedEmails = document.querySelector("ul.delete-list");

    function add(e){
        e.preventDefault();

        let recipientName = recipientNameField.value;
        let title = titleField.value;
        let message = messageField.value;

        if(!recipientName || !title || !message){
            return;
        }

        let li = document.createElement('li');

        let titleH4 = document.createElement('h4');
        titleH4.innerText = `Title: ${title}`;

        let recipientNameH4 = document.createElement('h4');
        recipientNameH4.innerText = `Recipient Name: ${recipientName}`;

        let span = document.createElement('span');
        span.innerText = message;

        let divWithBtns = document.createElement('div');
        divWithBtns.setAttribute('id', 'list-action');

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        sendBtn.innerText = 'Send';
        sendBtn.addEventListener('click', sendMail);

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', deleteMail);

        divWithBtns.appendChild(sendBtn);
        divWithBtns.appendChild(deleteBtn);

        li.appendChild(titleH4);
        li.appendChild(recipientNameH4);
        li.appendChild(span);
        li.appendChild(divWithBtns);

        listOfMailsSection.appendChild(li);

        recipientNameField.value = '';
        titleField.value = '';
        messageField.value = '';
    }

    function clear(e){
        e.preventDefault();

        recipientNameField.value = '';
        titleField.value = '';
        messageField.value = '';
    }

    function sendMail(e){
        e.preventDefault();

        let currLi = e.target.parentElement.parentElement.children;

        let newLi = document.createElement('li');

        let title = currLi[0].textContent.split(": ")[1];
        let recipientName = currLi[1].textContent.split(": ")[1];

        let nameSpan = document.createElement('span');
        nameSpan.innerText = `To: ${recipientName}`;

        let titleSpan = document.createElement('span');
        titleSpan.innerText = `Title: ${title}`;

        let divWithDeleteBtn = document.createElement('div');
        divWithDeleteBtn.classList.add("btn");

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', "submit");
        deleteBtn.classList.add("delete");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener('click', deleteMail);

        divWithDeleteBtn.appendChild(deleteBtn);

        newLi.appendChild(nameSpan);
        newLi.appendChild(titleSpan);
        newLi.appendChild(divWithDeleteBtn);

        listOfSendMailsSection.appendChild(newLi);
        e.target.parentElement.parentElement.remove();
    }

    function deleteMail(e){
        e.preventDefault();

        let currLi = e.target.parentElement.parentElement.children;

        let newLi = document.createElement('li');
        if(currLi.length === 3){
            newLi.appendChild(currLi[0]);
            newLi.appendChild(currLi[0]);
        }
        else if(currLi.length === 4){
            let nameSpan = document.createElement('span');
            nameSpan.innerText = `To: ${currLi[1].innerText.split(": ")[1]}`;

            let titleSpan = document.createElement('span');
            titleSpan.innerText = currLi[0].textContent;

            newLi.appendChild(nameSpan);
            newLi.appendChild(titleSpan);
        }

        deletedEmails.appendChild(newLi);
        e.target.parentElement.parentElement.remove();
    } 
}
solve()