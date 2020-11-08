// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "";
var specialCharacters = "!@#$%^&*()_-+=<>?:{}[]";
var lower = "";
var upper = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
 

function generatePassword() {

  var charlength = prompt ("Enter between 8 and 128 for password length" )
  if ( charlength < 8 || length > 128) {
    alert(" You must enter a number between 8 and 128")
  }

  confirmNumber = confirm("Will the password contain numbers?");
  confirmCharacter = confirm("Will the password contain special characters?");
  confirmUppercase = confirm("Will the password contain Uppercase letters?");
  confirmLowercase = confirm("Will the password contain Lowercase letters?");

  var minimumCount = 0;

  var functionArray = [
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    function getLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    function getUpper() {
      return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    function getSpecialCharacters(){
      return specialcharacters(Math.floor(Math.random() * symbols.length));
    }

  ];
  if (numbers === true) {
    minimumNumbers = functionArray[0];
    minimumCount++;

  }

  if (lower === true) {
    minimumLowerCases = functionArray[1];
    minimumCount++;

  }

  if (upper === true) {
    minimumUpperCases = functionArray[2];
    minimumCount++;

  }

  if (specialCharacters === true) {
    minimumSpecialCharacters = functionArray[3];
    minimumCount++;

  }
  var randomPasswordGenerated = "";
  for (let i = 0; i < (parseInt(charlength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArray[randomNumberPicked]();

  }
  randomPasswordGenerated += numbers;
  randomPasswordGenerated += lower;
  randomPasswordGenerated += upper;
  randomPasswordGenerated += symbols;


  return randomPasswordGenerated;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
