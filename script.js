let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}


let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text" ; 
    eyeicon.scr = "eye-open.png";
    }
        else{
            password.type = "password";
            eyeicon.src = "eye-close.png";
        }
}