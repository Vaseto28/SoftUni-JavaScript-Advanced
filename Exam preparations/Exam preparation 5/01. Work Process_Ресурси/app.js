function solve() {
    let firstNameField = document.getElementById("fname");
    let lastNameField = document.getElementById("lname");
    let emailField = document.getElementById("email");
    let birthdayField = document.getElementById("birth");
    let positionField = document.getElementById("position");
    let salaryField = document.getElementById("salary");

    let table = document.getElementById("tbody");
    let budgetSum = document.getElementById("sum");

    document.getElementById("add-worker").addEventListener('click', hireEmployee);

    function hireEmployee(e){
        e.preventDefault();

        let firstName = firstNameField.value;
        let lastName = lastNameField.value;
        let email = emailField.value;
        let birthday = birthdayField.value;
        let position = positionField.value;
        let salary = salaryField.value;

        if(!firstName || !lastName || !email || !birthday || !position || !salary){
            return;
        }

        let tr = document.createElement('tr');

        let firstNameTd = document.createElement('td');
        firstNameTd.innerText = firstName;

        let lastNameTd = document.createElement('td');
        lastNameTd.innerText = lastName;

        let emailTd = document.createElement('td');
        emailTd.innerText = email;

        let birthdayTd = document.createElement('td');
        birthdayTd.innerText = birthday;

        let positionTd = document.createElement('td');
        positionTd.innerText = position;

        let salaryTd = document.createElement('td');
        salaryTd.innerText = salary;

        let btnsTd = document.createElement('td');
        
        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.innerText = 'Fired';
        firedBtn.addEventListener('click', fireEmployee);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click', editEmployee);

        btnsTd.appendChild(firedBtn);
        btnsTd.appendChild(editBtn);

        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(birthdayTd);
        tr.appendChild(positionTd);
        tr.appendChild(salaryTd);
        tr.appendChild(btnsTd);

        table.appendChild(tr);

        budgetSum.innerText = (Number(budgetSum.innerText) + Number(salary)).toFixed(2);

        firstNameField.value = '';
        lastNameField.value = '';
        emailField.value = '';
        birthdayField.value = '';
        positionField.value = '';
        salaryField.value = '';
    }

    function fireEmployee(e){
        e.preventDefault();

        let currTableChildren = e.target.parentElement.parentElement.children;

        budgetSum.innerText = (Number(budgetSum.textContent) - Number(currTableChildren[5].textContent)).toFixed(2);

        e.target.parentElement.parentElement.remove();
    }

    function editEmployee(e){
        e.preventDefault();
        
        let currTableChildren = e.target.parentElement.parentElement.children;

        firstNameField.value = currTableChildren[0].textContent;
        lastNameField.value = currTableChildren[1].textContent;
        emailField.value = currTableChildren[2].textContent;
        birthdayField.value = currTableChildren[3].textContent;
        positionField.value = currTableChildren[4].textContent;
        salaryField.value = Number(currTableChildren[5].textContent);

        budgetSum.innerText = (Number(budgetSum.textContent) - Number(salaryField.value)).toFixed(2);

        e.target.parentElement.parentElement.remove();
    }
}
solve()