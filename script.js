
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","u","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","#","$","^","&","*","-","=","+","_","?",];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Function that generates the password based on confirmed criteria
function generatePassword(){
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
	var includeNumbers = confirm("Would you like to include numbers?");
	var includeSymbols = confirm("Would you like to include symbols?");

	// alerts user to select criteria if none is chosen
	if (!includeNumbers && !includeUpper && !includeSymbols && !includeLower) {
		alert('Must select at least one of the criteria!');
		return;
	}	

  var confirmedArr = [];
  var passArr= [];

  if (includeNumbers){
   confirmedArr = confirmedArr.concat(numbers);
    
  }
  if (includeUpper){
   confirmedArr = confirmedArr.concat(upper);
  
  }
  if (includeLower){
   confirmedArr = confirmedArr.concat(lower);
  
  }
  if (includeSymbols){
   confirmedArr = confirmedArr.concat(symbols);
  }
  console.log(confirmedArr)
  for (var i = 0; i < passwordLength; i++) {
    passArr.push (confirmedArr[Math.floor(Math.random() * confirmedArr.length)]); 
  }
  
  return passArr.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
