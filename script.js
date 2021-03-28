// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@,#$%&*{}[]/\\+=";

function generatePassword() {
  var pwLength = prompt("How do you want the password (8-128)");

  if (pwLength >= 8 && pwLength <= 128) {
   console.log("length" + pwLength);
  }else {
   pwLength = prompt("Enter a number between 8 and 128!");
  }

  var password = "";
    
  confirmUpper = confirm(" Do you want uppercase letters?");
  confirmLower = confirm(" Do you want lowercase letters?");
  confirmsSymbols = confirm(" Do you want Symbols?");
  confirmNumber = confirm(" Do you want numbers?");

  if (!confirmUpper && !confirmLower && !confirmSymbols && !confirmNumber) {
   alert("Please select at least one type of criteria!");
   return generatePassword();
  }
  
  if(confirmUpper){
    password += uppercase
  }
  if(confirmLower){
    password += lowercase
  }
  if(confirmSymbols){
    password += symbols
  }
  if(confirmNumber){
    password += numbers
  }

  for (var i = 0; i < length; i++) {
    password += password.charAt(Math.floor(Math.random() * password.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
