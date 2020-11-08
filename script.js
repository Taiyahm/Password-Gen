// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPass;
var confirmLowercase;
var confirmUppercase;
var confirmNum;
var Characters;
var select;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

space = [];

var toUpper = function (x) {
  return x.toUpperCase();
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  if (genPass < 8 || genPass > 128 ) {
    genPass + parseInt(prompt(" You must choose between 8 and 128 characters"));
  }

  else { 
  confirmLowercase = confirm("Will password contain lowercase letters?")
  confirmUppercase = confirm("Will password contain uppercase letters?")
  confirmCharacters = confirm("Will password contain special characters?")
  confirmNum = confirm("Will password contain numbers?")}
  
  if (!confirmLowercase && !confirmUppercase && !confirmCharacters && !confirmNum) {
    select = alert("You must pick at least one of the criteria");
  }     

  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
  choices = number;
  }

  else if (confirmLowercase) {
  choices = alpha;
  }

  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number);
  }

  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = character.concat(alpha);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alpha);
  }

  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

