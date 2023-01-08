window.addEventListener("load", solve);

function solve(){
    document.querySelector('button[type="submit"]').addEventListener('click', sendForm);
    document.getElementsByClassName("clear-btn")[0].addEventListener('click', clear);

    let deviceField = document.getElementById("type-product");
    let descriptionField = document.getElementById("description");
    let clientNameField = document.getElementById("client-name");
    let clientPhoneField = document.getElementById("client-phone");
    let recievedOrdersSection = document.getElementById("received-orders");
    let completedOrdersSection = document.getElementById("completed-orders");

    function sendForm(e){
        e.preventDefault();

        let deviceType = deviceField.value;
        let description = descriptionField.value;
        let clientName = clientNameField.value;
        let clientPhone = clientPhoneField.value;

        if(!description || !clientName || !clientPhone){
            return;
        }

        let div = document.createElement('div');
        div.classList.add("container");

        let h2 = document.createElement('h2');
        h2.innerText = `Product type for repair: ${deviceType}`;

        let h3 = document.createElement('h3');
        h3.innerText = `Client information: ${clientName}, ${clientPhone}`;

        let h4 = document.createElement('h4');
        h4.innerText = `Description of the problem: ${description}`;

        let startRepairBtn = document.createElement('button');
        startRepairBtn.classList.add("start-btn");
        startRepairBtn.innerText = "Start repair";
        startRepairBtn.addEventListener('click', startRepair);

        let finishRepairBtn = document.createElement('button');
        finishRepairBtn.classList.add("finish-btn");
        finishRepairBtn.setAttribute("disabled", true);
        finishRepairBtn.innerText = 'Finish repair';
        finishRepairBtn.addEventListener('click', finishOrder);
        
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startRepairBtn);
        div.appendChild(finishRepairBtn);
        recievedOrdersSection.appendChild(div);

        descriptionField.value = '';
        clientNameField.value = '';
        clientPhoneField.value = '';
    }

    function startRepair(e){
        e.target.setAttribute('disabled', true);

        e.target.parentElement.getElementsByClassName("finish-btn")[0].removeAttribute('disabled');
    }

    function finishOrder(e){
        let currOrder = e.target.parentElement;

        Array.from(currOrder.querySelectorAll("button")).forEach(x => x.remove());

        completedOrdersSection.appendChild(currOrder);
    }

    function clear(){
        Array.from(completedOrdersSection.querySelectorAll('div')).forEach(x => x.remove());
    }
}