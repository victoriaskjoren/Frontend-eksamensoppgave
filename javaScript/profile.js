function deleteUser(){
    const deleteFullName = document.getElementById("deleteFullName").value;
    const deleteEmail = document.getElementById("deleteEmail").value;
    const deleteAge = document.getElementById("deleteAge").value;
    const deletePassword = document.getElementById("deletePassword").value;
    const deleteButton = document.getElementById("deleteButton").value;

    deleteButton.addEventListener("click", function(){
        localStorage.removeItem("dele")
        nameDisplayChech()
    })



}

function updateUser(){
    const updateFullName = document.getElementById("updateFullName").value;
    const updateEmail = document.getElementById("updateEmail").value;
    const updateAge = document.getElementById("updateAge").value;
    const updatePassword = document.getElementById("updatePassword").value;

}





function logInButton() {
    const logInEmail = document.getElementById("logInEmail").value;
    const logInPassword = document.getElementById("logInPassword").value;
  
    if (savedEmail == logInEmail && savedPassword == logInPassword) {
      window.location.href = "../html/explore.html";
    } else {
      console.log({
        saved: {
          savedEmail,
          savedPassword,
        },
        entered: {
          logInEmail,
          logInPassword,
        },
      });
  
      console.log(logInEmail, logInPassword);
      document.getElementById("loginError").innerHTML = "Invalid <br/>";
    }
  }
  