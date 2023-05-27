window.onload=function(){
    if(localStorage.getItem("access-token")==null){
        window.location.href="./index.html";
    }
}
var fullName=document.getElementById("fullname");
var password=document.getElementById("password");
var email=document.getElementById("email");
var logout=document.getElementById("logout");
var signUp=document.getElementById("signup");
const user=JSON.parse(localStorage.getItem("userState"));
fullName.innerHTML+=user.fullName;
password.innerHTML+=user.password;
email.innerHTML+=user.email;

logout.addEventListener("click",logOut);
signUp.addEventListener("click",signup)


function logOut(e){
    localStorage.clear();
    window.location.href="./index.html";
}

function signup(e){
    if(localStorage.getItem("access-token")==null){
        window.location.href="./index.html";
    }
    else{
        e.preventDefault();
    }
}
