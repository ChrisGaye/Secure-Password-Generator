  // Assignment JavaScript Code
  var generateBtn = document.querySelector("#generate");
  var passwordText = document.querySelector("#password");


  // Arrays
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var optionsVariable = "hello";

  
  generateBtn.addEventListener("click", writePassword);

  
  function writePassword() {
    var randomString = "";
    passwordText.value = password;

  // This is where the user will choose what characters they want in their password
  var lowercase = confirm("Would you like your password to have any lowercase letters?");
  var uppercase = confirm("Would you like your password to have any uppercase letters?");
  var num = confirm("Do you want your password to have any numbers?");
  var specialChar = confirm("Do you want your password to have any special characters?");
  var passwordLength = prompt("Choose a password length with at least 8 characters and no more than 128 characters.");

  // This is where the length for the password will be checked
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 characters and 128 characters. Try again.");
    var passwordLength = prompt("Choose a password length with at least 8 characters and no more than 128 characters.");
    return "";
  }

  
  else if (!lowercase && !uppercase && !num && !specialChar) {
    alert("Error, invalid character type.\nPlease include at least one type of character.");
    var lowercase = confirm("Would you like your password to have any lowercase letters?");
    var uppercase = confirm("Would you like your password to have any uppercase letters?");
    var num = confirm("Do you want your password to have any numbers?");
    var specialChar = confirm("Do you want your password to have any special characters?");
    return "";
  }

  // This is how the password will be created
  if (lowercase) {
    optionsVariable += lowercaseLetters;
  }

  if (uppercase) {
    optionsVariable += uppercaseLetters;
  }

  if (num) {
    optionsVariable += numbers;
  }

  if (specialChar) {
    optionsVariable += specialCharacters;
  }

  for (var i = 0; i < passwordLength; i++) {  
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
  }
    passwordText.value = randomString;
    var password = generatePassword();
  }