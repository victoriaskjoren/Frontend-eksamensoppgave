//Punkt 3: Password
document.getElementById("password").addEventListener("keyup" , function(){
    var password= document.getElementById("password").value;
    if (password.length <= 8){
        document.getElementById("passworderror").innerHTML = "Password must contain more than 8 letters"
    }
    else {
        document.getElementById("passworderror").innerHTML = ""
    }
})

function validateContactInformation() {
// Punkt 1: Sæt JS variable, til de værdier der er indtastet i HTML formen 
    
    var name = document.getElementById('user_name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value
    var form_valid= true

//Punkt 1: Valider username
    
     if(name==null || name == "") {
        // Tilføjer en besked
        document.getElementById("validationTextName").innerHTML = "You must fill in your name <br/>"
        
        // setter formen til false
        form_valid = false;
    } else { 
        // repeat
        document.getElementById("validationTextName").innerHTML = null;
   
}
//Punkt 2: Email
var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    
    if(atPos < 1 || dotPos> email.length-2 || dotPos<atPos) {
        document.getElementById("validationTextEmail").innerHTML = "Please put in a valid e-mail<br/>";
        form_valid = false;
    
    } else {
        document.getElementById("validationTextEmail").innerHTML = null;
    }
//also need to require a password
if(password==null || password == "") {
    // Tilføjer en besked
    document.getElementById("passworderror").innerHTML = "You must fill in a password <br/>"
    
    // setter formen til false
    form_valid = false;
} else { 
    // repeat
    document.getElementById("passworderror").innerHTML = null;
}
if(form_valid){
    window.location.href=('homeIfLoggedIn.html')
}else{
    return false
}
}


