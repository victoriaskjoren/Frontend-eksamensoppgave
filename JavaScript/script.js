document
  .getElementById("signUpPassword")
  .addEventListener("keyup",
  function () {
    let password = document.getElementById("signUpPassword").value;
    if (password.length < 8) {
      document.getElementById("passworderror").innerHTML =
        "Password must contain more than 8 letters";
    } else {
      document.getElementById("passworderror").innerHTML = "";
    }
  });

function signInButton() {
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

  localStorage.setItem("fullName", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", signUpPassword);
  localStorage.setItem("age", age);

  const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDU1Mzk1ODJ9.KZ_cq16jTc8cf4QpxVt_03QcSxRKLpCOqEPB7snhfkQ";
  console.log("test")
  fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email
    }),
    headers: {
      'Content-Type': 'application/json',
      authorization: "Bearer " + jwt
    }
  }).then((response) => {
    if (form_valid) {
      window.location.href = "../html/explore.html";
    } else {
      return false;
    }
  })


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
    document.getElementById("logInError").innerHTML = "Invalid <br/>";
  }
}


function deleteUser(){



        localStorage.removeItem("fullName")
        localStorage.removeItem("email")
        localStorage.removeItem("age")
        localStorage.removeItem("password")

        window.location.href = "../html/index.html";



}
