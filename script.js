// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  howLong = window.prompt("How long should the password be?", "Choose between 8 and 128 characters");
  //charType = window.prompt(something to choose char type);

  if (howLong > 8 && howLong < 128) {
    window.prompt("something to choose char type");
   }
  //if howLong valid ask next prompt
  else {
    return;
  }
  



  //required
  //minlength
  //maxlength



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);