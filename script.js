mainContainer = document.getElementById('main-container');
nameField = document.getElementById('name');
emailField = document.getElementById('email');
passwordField = document.getElementById('password');
confirmPasswordField = document.getElementById('confirm-password');
submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    name = nameField.value;
    email = emailField.value;
    password = passwordField.value;
    confirmPassword = confirmPasswordField.value;
    if(name==='' || email==='' || password==='' || confirmPassword===''){
        
        if(document.getElementById('error-message')===null){
            errorMessage = document.createElement('p');
            errorMessage.id = 'error-message';
            errorMessage.innerText = 'Error: All Fields are Mandatory!';
            errorMessage.style.color = 'blue';
            errorMessage.style.fontWeight = 'bold';
            mainContainer.appendChild(errorMessage);
        }
        
    }
    else if(password!==confirmPassword){
        if(document.getElementById('error-message-pw')===null){
            errorMessagePw = document.createElement('p');
            errorMessagePw.id = 'error-message-pw';
            errorMessagePw.innerText = 'Error: Password Not Matching!';
            errorMessagePw.style.color = 'blue';
            errorMessagePw.style.fontWeight = 'bold';
            mainContainer.appendChild(errorMessagePw);
        }
    }
    console.log(name);
})