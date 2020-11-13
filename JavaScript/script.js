document
  .getElementById("signUpPassword")
  .addEventListener("keyup", function () {
    let password = document.getElementById("signUpPassword").value;
    if (password.length <= 8) {
      document.getElementById("passworderror").innerHTML =
        "Password must contain more than 8 letters";
    } else {
      document.getElementById("passworderror").innerHTML = "";
    }
  });

function validateContactInformation() {
  // Laver JS variabler og henter values fra html

  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;

  const signUpPassword = document.getElementById("signUpPassword").value;
  const age = document.getElementById("age").value;
  const form_valid = true;

  //Punkt 1: Valider username

  if (name == null || name == "") {
    // Legger til en feilmelding
    document.getElementById("validationTextName").innerHTML =
      "You must fill in your name <br/>";

    // setter formen til false
    form_valid = false;
  } else {
    // repeat
    document.getElementById("validationTextName").innerHTML = null;
  }
  //Punkt 2: Email
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");

  if (atPos < 1 || dotPos > email.length - 2 || dotPos < atPos) {
    document.getElementById("validationTextEmail").innerHTML =
      "Please put in a valid e-mail<br/>";
    form_valid = false;
  } else {
    document.getElementById("validationTextEmail").innerHTML = null;
  }
  //also need to require a password

  if (signUpPassword == null || signUpPassword == "") {
    // Legger til en besked
    document.getElementById("passworderror").innerHTML =
      "You must fill in a password <br/>";

    // punkt 4 age

    if (age < 18 || age == "") {
      //legger til en beskjed
      document.getElementById("validationTextAge").innerHTML =
        "You must be over the age of 18 <br/>";
    }

    // setter formen til false
    form_valid = false;
  } else {
    document.getElementById("passworderror").innerHTML = null;
  }

  if (form_valid) {
    window.location.href = "../html/explore.html";
  } else {
    return false;
  }

  localStorage.setItem("fullName", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", signUpPassword);
  localStorage.setItem("age", age);

  e.preventDefault();
}




function logInButton() {

    var savedEmail = localStorage.getItem("email");
    var savedPassword = localStorage.getItem("password");

  const logInEmail = document.getElementById("logInEmail").value;
  const logInPassword = document.getElementById("logInPassword").value;

  if (savedEmail == logInEmail && savedPassword == logInPassword) {
      
    window.location.href = "../html/explore.html";
  } else {
    document.getElementById("loginError").innerHTML = "Invalid <br/>";
  }
}


function deleteUser(){
    
    console.log ("hei");
        localStorage.removeItem("fullName");
        localStorage.removeItem("email");
        localStorage.removeItem("age");
        localStorage.removeItem("password");

    
}
