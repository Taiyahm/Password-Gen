
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!$^&*-=+_?";

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Function that generates the password based on confirmed criteria
function generatePW(){
  // Prompts user to enters password length
	var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128 characters:"));
	

  if (passwordLength < 8) {
    alert('Must be at least 8 characters!');
    return;
  }
  if (passwordLength > 128) {
    alert('Must be less than 128 characters!');
    return;
  }

  // Prompts user to include uppercase,lowercase,numbers, and/or symbols
  var includeUpper = confirm("Would you like to include uppercase letters?");
  var includeLower = confirm("Would you like to include lowercase letters?");
	var includeNumber = confirm("Would you like to include numbers?");
	var includeSymbols = confirm("Would you like to include symbols?");

	// alerts user to select criteria if none is chosen
	if (!includeNumber && !includeUpper && !includeSymbols && !includeLower) {
		alert('Must select at least one of the criteria!');
		return;
	}	

	var password = "";

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
