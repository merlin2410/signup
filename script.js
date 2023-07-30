mainContainer = document.getElementById('main-container');
nameField = document.getElementById('name');
emailField = document.getElementById('email');
passwordField = document.getElementById('password');
confirmPasswordField = document.getElementById('confirm-password');
submitButton = document.getElementById('submit-btn');
let userList = [];
if(localStorage.getItem("userList")!==null){
    userList = JSON.parse(localStorage.getItem("userList"));
}
if(localStorage.getItem("userDetails")!==null){
    currUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    for(let user of userList){
        if(user.token===currUserDetails.token){
            redirect();
        }
    }
}

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
    else{
        let userDetails = {
            name: name,
            email: email,
            password: password,
            token: generateToken()
        }
        userList.push(userDetails);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        localStorage.setItem("userList",JSON.stringify(userList));
    }
    console.log(name);
})

function generateToken(){
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXVZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for(let i=0;i<16;i++){
        let index = Math.floor((Math.random() * str.length));
        console.log(index);
        token += str[index];
    }
    console.log(token);
    return token;
}

function redirect(){
    window.location.href = 'profile.html'
}