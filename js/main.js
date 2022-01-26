const firstName = document.querySelector("fName");
const lastName = document.querySelector(".lName");
const email = document.querySelector(".email");
const password = document.querySelector(".pWord");
const submit = document.querySelector(".submitButton");

const fNameError = document.querySelector(".fNameError");
const lNameError = document.querySelector(".lNameError");
const emailError = document.querySelector(".emailError");
const pWordError = document.querySelector(".pWordError");



submit.addEventListener("click", function(){

  if (firstName.value == "") {
    fNameError.textContent = "First Name cannot be empty";
  }else{
    fNameError.textContent = "";
  }

  if (lastName.value == "") {
    lNameError.textContent = "Last Name cannot be empty";
  }else{
    lNameError.textContent = "";
  }

  if (email.value == "") {
    emailError.textContent = "Email cannot be empty";
  }else{
    emailError.textContent = "";
  }
    
  if (password.value == "") {
    pWordError.textContent = "Password cannot be empty";
  }else{
    pWordError.textContent = "";
  }

});

