var isLogIn = JSON.parse(localStorage.getItem('isLogIn'));
var logIn = document.getElementById('logIn');
var signUp = document.getElementById('signUp');
var logOutButton = document.getElementById('logOut');

var registrationData = JSON.parse(localStorage.getItem('registrationData'));
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var uName = document.getElementById('uName');
var uPhone = document.getElementById('uPhone');
var uGender = document.getElementById('uGender');
var uEmail = document.getElementById('uEmail');
var oPassword = document.getElementById('oPassword');

var changePasswordForm = document.getElementById("changePasswordForm");



if (isLogIn == null || isLogIn == false ){
    logIn.style.display= true ;
    signUp.style.display= true;
    logOutButton.style.display = "none";
}
else {
    logIn.style.display= "none" ;
    signUp.style.display= "none";
    logOutButton.style.display = true;
    // userData.innerHTML = JSON.stringify(registrationData[0]);

    fName.innerHTML = registrationData[0].firstName;
    lName.innerHTML = registrationData[0].lastName;
    uName.innerHTML = registrationData[0].userName;
    uPhone.innerHTML = registrationData[0].phone;
    uGender.innerHTML = registrationData[0].gender;
    uEmail.innerHTML = registrationData[0].email;
    oPassword.innerHTML = registrationData[0].password;
    

}

function logOut(){
    // console.log('111111111111111111111');
    localStorage.setItem('isLogIn', false);
    window.location.href='../pages/login.html';
}

function changePassword(event){
    event.preventDefault();
    if (changePasswordForm.style.display === "none") {
        changePasswordForm.style.display = "block";
    } else {
        changePasswordForm.style.display = "none";
    }
}
changePasswordForm.addEventListener('submit', function(e){
    e.preventDefault();
    var oldPassword = document.getElementById("oldPassword").value;
    var newPassword =  document.getElementById("newPassword").value;
    var confirmOldPassword =  document.getElementById("confirmOldPassword").value;
    if(oldPassword !== null && oldPassword !== "" && oldPassword == (registrationData[0].password) ){
        if(newPassword == confirmOldPassword && newPassword !== null && newPassword !== "" ){
            registrationData[0].password = newPassword;
            console.log(registrationData[0].password);
            localStorage.setItem('registrationData', JSON.stringify(registrationData));
            alert("Password changed successfully!");
            changePasswordForm.style.display = "none";
            oPassword.innerHTML = registrationData[0].password;

        }
        else{
            alert("password and confirm Password are not the same :/")
        }
    }
    else{
        alert("the current password wrong  :/")
    }
})