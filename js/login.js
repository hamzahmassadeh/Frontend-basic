var signInForm = document.getElementById('signInForm');
var emailAddress =  document.getElementById('emailAddress');
var oPassword = document.getElementById('oPassword');

signInForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(emailAddress.value);
    var registrationData = JSON.parse(localStorage.getItem('registrationData'))
    for(var i=0 ; i < registrationData.length ; i++){
        if(registrationData[i].email == emailAddress.value && registrationData[i].password == oPassword.value ){
            alert("Welcome back "+ registrationData[i].userName);
            localStorage.setItem('isLogIn', true);
            window.location.href= '../index.html' ;
            break;
        }
        else{
            alert('the email or password are incorrect ;)');
            break;
        }
    };
})