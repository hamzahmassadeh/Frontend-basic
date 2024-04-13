var signInForm = document.getElementById('signInForm');
var emailAddress =  document.getElementById('emailAddress');
var oPassword = document.getElementById('oPassword');
var isFound = false; 
signInForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(emailAddress.value);
    var registrationData = JSON.parse(localStorage.getItem('registrationData'))
    if(registrationData !== null){
        if(emailAddress.value == '' || oPassword.value == ''){
            alert('please enter your email and password');
        }else{
            for(var i=0 ; i < registrationData.length ; i++){
                if(registrationData[i].email == emailAddress.value && registrationData[i].password == oPassword.value ){
                    isFound = true; 
                    alert("Welcome back "+ registrationData[i].userName);
                    localStorage.setItem('isLogIn', true);
                    userKey = registrationData[i].userName;
                    localStorage.setItem('userKey', userKey);
                    localStorage.setItem('userKey', JSON.stringify(userKey));
                    window.location.href= '../index.html' ;
                    break;
                }            
            };
            if(!isFound){
                alert('Email or password are incorrect ;)'); 
            }
        }
    }else if (emailAddress.value == '' || oPassword.value == ''){
        alert('please enter your email and password');
    }else{
        alert("you need to signUP first");
    }
})