// create arrays to hold variable "libraries" for each character type
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!$^&*-=+_?";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePW(){
	var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128 characters:"));
	
  if (passwordLength < 8) {
    alert('The password must be at least 8 characters!');
    return;
  }
  if (passwordLength > 128) {
    alert('The password must be less than 128 characters!');
    return;
  }

	var includeNumber = confirm("Would you like to include numbers?");
	var includeSymbols = confirm("Would you like to include symbols?");
	var includeUpper = confirm("Would you like to include uppercase letters?");
	var includeLower = confirm("Would you like to include lowercase letters?");
		
	if (!includeNumber && !includeSymbols && !includeUpper && !includeLower) {
		alert('Must select at least one type of password character!');
		return;
	}	


	var password = '';

	for ( var i = 0; i < passwordLength; i++) {
		if(includeNumber && password.length < passwordLength) {
			password += getRandom(numbers);
		}
		if(includeSymbols && password.length < passwordLength) {
			password += getRandom(symbols);
		}
		if(includeUpper && password.length < passwordLength) {
			password += getRandom(upper);
		}
		if(includeLower && password.length < passwordLength) {
			password += getRandom(lower);
		}
	}
	return password;
}


function getRandom(arr) {
	var index = Math.floor(Math.random() * arr.length);
	var value = arr[index];
	return value;
}

// Write password to the #password input
function writePassword() {
  var password = generatePW();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
