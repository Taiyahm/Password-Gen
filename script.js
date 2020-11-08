// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var numbersArr= numbers.split("")
var symbols = "!##$%^&*(){}_+=-[]<>?/|";
var symbolsArr = symbols.split("");
var upper = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArr = upper.split("")
var lower = "abcdefghijklmnopqrstuvwxyz";
var lowerArr = lower.split("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
 

function generatePassword() {
  var characters = [];
  var resultpass = "";

  var length = prompt ("Enter between 8 and 128 for password length" )
  if ( length < 8 || length > 128) {
    alert(" You must enter a number between 8 and 128")
  }

  confirmNumber = confirm("Will the password contain numbers?");
  confirmCharacter = confirm("Will the password contain special characters?");
  confirmUppercase = confirm("Will the password contain Uppercase letters?");
  confirmLowercase = confirm("Will the password contain Lowercase letters?");

  if(confirmNumber) {
    Array.prototype.push.apply (characters, numbersArr)
  }

  if(confirmCharacter) {
    Array.prototype.push.apply (characters, lowerArr)
  }
  if(confirmNumber) {
    Array.prototype.push.apply (characters, upperArr)
  }

  if(confirmNumber) {
    Array.prototype.push.apply (characters, symbolsArr)
  }
 
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
   }

  else{
   for(var i=0; i<length; i++){
    var random = Math.floor(Math.random()*characters.length);
    resultpass += characters[random];
   }
   document.getElementById("password").innerHTML = resultpass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)}
