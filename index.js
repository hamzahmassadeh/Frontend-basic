var profile = document.getElementById('profile');
var isLogIn = JSON.parse(localStorage.getItem('isLogIn'));
if (isLogIn == null || isLogIn == false){
    window.location.href='pages/login.html';
    profile.style.display = "none";

}
else{
    console.log('isLogIn = true');
}

function fav(num){

    var colors = document.getElementsByClassName('fa-heart')[num];
    if(colors.style.color=='white'){
        colors.style.color='red'; 
    }
    else{
        colors.style.color='white'; 
    }

       






    
  

}