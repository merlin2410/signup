
if(localStorage.getItem("userDetails")===null){
    window.location.href = 'index.html';
}

let userDetails = JSON.parse(localStorage.getItem("userDetails"));
const nameDisplay = document.getElementById('name-display');
const emailDisplay = document.getElementById('email-display');
const tokenDisplay = document.getElementById('token-display');
const passwordDisplay = document.getElementById('password-display');
const logoutButton = document.getElementById('logout');




nameDisplay.innerText = userDetails.name;
emailDisplay.innerText = userDetails.email;
tokenDisplay.innerText = userDetails.token;
passwordDisplay.innerText = userDetails.email;

logoutButton.addEventListener('click',(event)=>{
    event.preventDefault();
    localStorage.removeItem('userDetails');
    window.location.href= 'index.html';
})