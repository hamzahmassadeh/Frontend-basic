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
var userKey = JSON.parse(localStorage.getItem('userKey'));


if (isLogIn == null || isLogIn == false ){
    logIn.style.display= true ;
    signUp.style.display= true;
    logOutButton.style.display = "none";
}
else {
    logIn.style.display= "none" ;
    signUp.style.display= "none";
    logOutButton.style.display = true;
    for(var i = 0 ; i<registrationData.length ; i++ ){
        if(registrationData[i].userName == userKey){
            fName.innerHTML = registrationData[i].firstName;
            lName.innerHTML = registrationData[i].lastName;
            uName.innerHTML = registrationData[i].userName;
            uPhone.innerHTML = registrationData[i].phone;
            uGender.innerHTML = registrationData[i].gender;
            uEmail.innerHTML = registrationData[i].email;
            oPassword.innerHTML = registrationData[i].password;
        }
    }
}
function logOut(){
    localStorage.setItem('isLogIn', false);
    window.location.href='../pages/login.html';
}
function changePassword(){
    console.log("00000000000000000000")
    // event.preventDefault();
    if (changePasswordForm.style.display === "none" ||changePasswordForm.style.display === "" ) {
    console.log("00000000000000000000")
        
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