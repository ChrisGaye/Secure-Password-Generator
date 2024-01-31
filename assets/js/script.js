// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button

function generatePassword() { 
  
  // Character sets
  var lowercaseLetters = ("abcdefghijklmnopqrstuvwxyz");
  var uppercaseLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var numbers = ("1234567890");
  var specialCharacters = ("`~!@#$%^&*()_-+={[}]|\:;'<,>.?/");

  // Prompt that asks for a password length
  var length = window.prompt("Please enter a number that ranges from 8 numbers to 128 numbers.");
  while (length < 8 || length > 128) {
    length = window.prompt("Your input was not in the valid number range. Please enter a number that ranges from 8 numbers to 128 numbers.");
  }
  
  // Prompt that asks if the user wants lowercase letters
  var lowercase = window.confirm("Would you like your random password to have lowercase letters?");

  // Prompt that asks if the user wants uppercase letters
  var uppercase = window.confirm("Would you like your random password to have uppercase letters?");

  // Prompt that asks if the user wants their password to contain numbers
  var numerical = window.confirm("Would you like your random password to contain numbers?");

  // Prompt that asks if the user wants special characters
  var special = window.confirm("Would you like your random password to have special characters?");

  // Makes sure that the user has at least one of the fields selected
  while (!lowercase && !uppercase && !numerical && !special) {
    alert("You must select at least one field.");
    return;
  }

  // Defining an empty character set
  let characterSet = "";

  if (lowercase) characterSet += lowercaseLetters;
  if (uppercase) characterSet += uppercaseLetters;
  if (numerical) characterSet += numbers;
  if (special) characterSet += specialCharacters;

  let password = "";
  for (let i = 0; i < length; i++) {
      password += characterSet[Math.floor(Math.random() * characterSet.length)];
  }

  // The password is then stored in the console and displayed on the page
  console.log(password);
  return password;
}

