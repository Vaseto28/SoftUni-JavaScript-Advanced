function validate() {
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirm-password').value;
        let companyCheckBox = document.getElementById('company');

        if (username.length < 3 || username.length > 20 || username.match('\w+')){
            document.getElementById('username').style.borderColor = 'red';
        }

        if (password.lentgh < 5 || password.length > 15 || !password.match('\w+')){
            document.getElementById('password').style.borderColor = 'red';
        }

        if (confirmPassword.length < 5 || confirmPassword.lentgh > 15 || !confirmPassword.match('\w+')){
            document.getElementById('confirm-password').style.borderColor = 'red';
        }

        if (!email.includes('@')){
            document.getElementById('email').style.borderColor = 'red';
        }
        else{
            let lastPart = email.split('@')[1];

            if (!lastPart.includes('.')){
                document.getElementById('email').style.borderColor = 'red';
            }
        }

        if (companyCheckBox.checked){
            document.getElementById('companyInfo').style.display = 'block';
            let companyNumber = document.getElementById('companyNumber').value;

            if (companyNumber < 1000 || companyNumber > 9999){
                document.getElementById('companyNumber').style.borderColor = 'red';
            }
        }
        else{
            document.getElementById('companyInfo').style.display = 'none';
        }
    }
