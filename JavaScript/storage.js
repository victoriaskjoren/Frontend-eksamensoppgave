
const registerForm = document.querySelector(".registerForm");
const nameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const ageInput = document.querySelector("#age");

const submitBtn = document.querySelector("#submitBtn");


const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");


registerForm.addEventListener('submit', function(e){
    e.preventDefault()
});

submitBtn.addEventListener("click", function(){
    localStorage.setItem("fullName", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
    localStorage.setItem("age", ageInput.value);
    
    nameDisplayCheck()
})

function nameDisplayCheck(){
    if(localStorage.getItem("fullName")){
        let name = localStorage.getItem("fullName");
        h1.textContent = "Velkommen " + name
        personalGreeting.textContent = "Velkommen til vår hjemmeside " + name
    }
}

document.body.onload = nameDisplayChech;



