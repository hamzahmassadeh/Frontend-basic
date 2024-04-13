var form = document.getElementsByClassName("form")[0];
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var userName = document.getElementById('userName');
var gender = document.getElementById('gender');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var password = document.getElementById('Password');
var repeatPassword = document.getElementById('RepeatPassword');
var allData = JSON.parse(localStorage.getItem('registrationData')) || [];
form.addEventListener('submit', function(e){
    e.preventDefault();
    var signUpData ={
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        gender: gender.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
    }
    if (allData.length !== 0 ){
        for(var i=0 ; i < allData.length ; i++){
            if(allData[i].userName == signUpData.userName ){
                alert('userName is used, please choose another one');
                break;
            }else if(allData[i].email == signUpData.email ){
                alert('email is already exist');
                break;
            }else{
                if(password.value == repeatPassword.value ){
                    allData.push(signUpData);
                    localStorage.setItem('registrationData', JSON.stringify(allData));
                    console.log("Form submitted successfully:", signUpData);
                    localStorage.setItem('isLogIn', true);
                    localStorage.setItem('userKey', JSON.stringify(signUpData.userName));
                    alert("Welcome "+ userName.value);
                    window.location.href= "../index.html"
                }
                else{
                    alert("password and repeatPassword are not the same :/")
                };
                break;
            }
        }
    }else{
        if(password.value == repeatPassword.value ){
            allData.push(signUpData);
            localStorage.setItem('registrationData', JSON.stringify(allData));
            console.log("Form submitted successfully:", signUpData);
            localStorage.setItem('isLogIn', true);
            localStorage.setItem('userKey', JSON.stringify(signUpData.userName));
            alert("Welcome "+ userName.value);
            window.location.href= "../index.html"
        }
        else{
            alert("password and repeatPassword are not the same :/")
        };
    }
});
