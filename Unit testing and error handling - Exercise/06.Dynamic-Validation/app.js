function validate() {
    let emailField = document.getElementById("email");
    emailField.addEventListener('change', validateEmail);

    function validateEmail(event){
        let input = event.target.value;
        if (!(input.includes('@') && input.includes('.'))){
            event.target.classList.add("error");
            return;
        }

        let name = input.split('@')[0];
        let domain = input.split('@')[1].split('.')[0];
        let extention = input.split('@')[1].split('.')[1];

        if (validatePartOfEmail(name) || validatePartOfEmail(domain) || validatePartOfEmail(extention)){
            event.target.classList.add("error");
            return;
        }

        let fullEmail = name + '@' + domain + '.' + extention;
        if (fullEmail !== input){
            event.target.classList.add("error");
        }
        else{
            event.target.classList.remove("error");
        }
    }

    function validatePartOfEmail(part){
        for (let letter of part){
            if (letter != letter.toLowerCase()){
                return true;
            }
        }

        return false;
    }
}