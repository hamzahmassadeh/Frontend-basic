var form = document.getElementsByClassName("form")[0];
var inputName = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('Password');
var repeatPassword = document.getElementById('RepeatPassword');
var allData = JSON.parse(localStorage.getItem('registrationData')) || [];

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    var signUpData ={
        name: inputName.value,
        email: email.value,
        password: password.value,
        repeatPassword: repeatPassword.value
    }
    allData.push(signUpData);

    localStorage.setItem('registrationData', JSON.stringify(allData));
    console.log("Form submitted successfully:", signUpData);
    
});
