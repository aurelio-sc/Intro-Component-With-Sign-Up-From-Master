const firstName = document.querySelector(".fName");
const lastName = document.querySelector(".lName");
const email = document.querySelector(".email");
const password = document.querySelector(".pWord");
const submit = document.querySelector(".submitButton");

const fNameError = document.querySelector(".fNameError");
const lNameError = document.querySelector(".lNameError");
const emailError = document.querySelector(".emailError");
const pWordError = document.querySelector(".pWordError");

submit.addEventListener("click", function(){
  
  console.log("clicou!");

  if (!firstName.textContent) {
    fNameError.textContent = "First Name cannot be empty"; //!String checa se a string é vazia. (True se for vazia)
    firstName.style.backgroundImage = "url('./images/icon-error.svg')";    
  }else{
    fNameError.textContent = "";
  }

  if (!lastName.textContent) {
    lNameError.textContent = "Last Name cannot be empty";
    lastName.style.backgroundImage = "url('./images/icon-error.svg')";
  }else{
    lNameError.textContent = "";
  }

  if (email.value == "") {
    emailError.textContent = "Email cannot be empty";
    email.style.backgroundImage = "url('./images/icon-error.svg')";
  }else{
    emailError.textContent = "";
  }
    
  if (password.value == "") {
    pWordError.textContent = "Password cannot be empty";
    password.style.backgroundImage = "url('./images/icon-error.svg')";
  }else{
    pWordError.textContent = "";
  }

});


