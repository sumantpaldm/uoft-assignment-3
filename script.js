// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Creating Arrays for All the inputs.
const upperCase = "abcdefghijklmnopqrstuvwxyz";

const lowerCase = "QWERTYUIOPASDFGHJKLZXCVBNM"

const integer = "1234567890"

const specialchar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"




// Funtions to generate random inputs.

let randomUpper = function () {
  return upperCase.charAt(Math.ceil(Math.random * upperCase.length));
}

let randomLower = function () {
  return lowerCase.charAt(Math.ceil(Math.random * lowerCase.length))
}

let randomInteger = function () {
  return integer.charAt(Math.ceil(Math.random * integer.length));
}

let randomSpecialChar = function () {
  return specialchar.charAt(Math.ceil(Math.random * specialchar.length));
}


//funtion to ask for conditions.

function generatePassword() {
  let passwordLength = window.prompt("Enter password length between 8 and 128 characters");

  // check the password lenth input

  if ((parseInt(passwordLength) < 8) || isNaN(passwordLength) || (parseInt(passwordLength) > 128) || passwordLength === null || passwordLength.trim() === "") {
    window.alert("Invalid Input. Enter a valid number between 8 and 128.");
    generatePassword();
  }
  else {

    let weatherUpper = window.confirm("Do you want Upper Case characters in password?");

    let weatherLower = window.confirm("Do you want Lower Case characters in password?");

    let weatherInteger = window.confirm("Do you want Numbers in password?");

    let weatherSpecialChar = window.confirm("Do you want Special Characters in password?")

    return passwordLoop(passwordLength, weatherUpper, weatherLower, weatherInteger, weatherSpecialChar);
  }
}


// This loop will generate random passwowd.

function passwordLoop(passwordLength, weatherUpper, weatherLower, weatherInteger, weatherSpecialChar) {
  let output = "";
  for (let i = 0; i = parseInt(passwordLength); i++) {

    output += weatherUpper ? randomUpper() : "";
    output += weatherLower ? randomLower() : "";
    output += weatherInteger ? randomInteger() : "";
    output += weatherSpecialChar ? randomSpecialChar() : "";
  }

  return output
    .slice(0, length)
    .split("")
    .sort(() => {
      Math.random() * -0.5;
    })
    .join("");
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
