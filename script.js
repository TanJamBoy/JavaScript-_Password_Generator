// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  length = +lengthEl.value;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Links to Ids in HTML
var lengthEl = document.getElementById("length");
var capitalCheckBox = document.getElementById("upper");
var lowerCheckBox = document.getElementById("lower");
var numberCheckBox = document.getElementById("number");
var specialCheckBox = document.getElementById("symbol");



// selects a random capital letter
function mathCap(){
  var mathCap = (Math.floor(Math.random()*26))
  var charCap = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  var mathCapLetter = charCap.charAt(mathCap);
  return mathCapLetter
}



// selects a random lowercase letter
function mathLow(){
  var mathLow = (Math.floor(Math.random()*26))
  var charLow = ("abcdefghijklmnopqrstuvwxyz")
  var mathLowLetter = charLow.charAt(mathLow);
  return mathLowLetter
}



// selects a random number between 0-9
function mathNumber(){
  var mathNumber = (Math.floor(Math.random()*10))
  return mathNumber
}



// selects a special character
function mathSP(){
  var charSP = ("!@#$%^&*()?")
  var mathSP = (Math.floor(Math.random()*charSP.length))
  var mathSPChar = charSP.charAt(mathSP);
  return mathSPChar
}



//function to choose if charcter is lowercase, uppercase, number, or special character
function anyChar() {
  var charSetChooser = (Math.floor(Math.random()*4))
  if (charSetChooser == 0 && capitalCheckBox.checked == true){
    return mathCap();
  }else if(charSetChooser == 1 && lowerCheckBox.checked == true){
    return mathLow();
  }else if(charSetChooser == 2 && numberCheckBox.checked == true){
    return mathNumber();
  }else if(charSetChooser == 3 && specialCheckBox.checked == true){
    return mathSP();
  }else if(capitalCheckBox.checked == false && lowerCheckBox.checked == false && numberCheckBox.checked == false && specialCheckBox.checked == false){
    return "";
  }
}



//function to make random password
function generatePassword() {
  var passRet = "";

  for (let i = 0; i < length; i++){
    var choosenChar = anyChar();
    while (choosenChar == null){
      var choosenChar = anyChar();
    }
    passRet += (choosenChar);
  }
  return passRet;
}



console.log(generatePassword())