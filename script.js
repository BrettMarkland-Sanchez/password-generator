// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Concatenates array values as string
function concat(array){
  let string = "";
  for(let i = 0; i < array.length; i++){
    string += array[i];
  }
  return string;
}

// Password criteria variables
let complexity = "";
let passLength = 0;
let passwordArray = [];
let bank = 0;

// Password character banks
const stringBank = "abcdefghijklmnopqrstuvwxyz"; 
const numberBank = "0123456789";
const specialBank = "!@#$%^&*()_+~`|}{[]:;?><./-=,";

// Checks if value for complexity matches one of the choices given in getUserInput()
function isValid(complexity){
  return(complexity == "Low" || complexity == "Medium" || complexity == "High");
}

// Generates custom password to be saved and written
function generatePassword(){
  passwordArray = getUserInput();
  // Runs through the generator for the length specified by the user
  for(let i = 0; i < passLength; i++){
    // Nested switches populate passwordArray with values based on complexity
    switch(complexity){
      // Uses two randomly chosen cases of lowercase and numbers for Low complexity
      case "Low":
        bank = Math.ceil(Math.random()*2);

        switch(bank){
          case 1:
            passwordArray[i] = stringBank.charAt(Math.floor(Math.random()*stringBank.length))
            break;
          case 2:
            passwordArray[i] = numberBank.charAt(Math.floor(Math.random()*numberBank.length))
            break;
        }
        break;

      // Uses three randomly chosen cases of lowercase, numbers, and uppercase for Medium complexity
      case "Medium":
        bank = Math.ceil(Math.random()*3);

        switch(bank){
          case 1:
            passwordArray[i] = stringBank.charAt(Math.floor(Math.random()*stringBank.length))
            break;
          case 2:
            passwordArray[i] = numberBank.charAt(Math.floor(Math.random()*numberBank.length))
            break;
          case 3:
            passwordArray[i] = stringBank.charAt(Math.floor(Math.random()*stringBank.length)).toUpperCase()
            break;
        }
        break;

      // Uses four randomly chosen cases of lowercase, numbers, uppercase, and special characters for High complexity
      case "High":
        bank = Math.ceil(Math.random()*4);

        switch(bank){
          case 1:
            passwordArray[i] = stringBank.charAt(Math.floor(Math.random()*stringBank.length));
            break;
          case 2:
            passwordArray[i] = numberBank.charAt(Math.floor(Math.random()*numberBank.length));
            break;
          case 3:
            passwordArray[i] = stringBank.charAt(Math.floor(Math.random()*stringBank.length)).toUpperCase();
            break;
          case 4:
            passwordArray[i] = specialBank.charAt(Math.floor(Math.random()*specialBank.length));
            break;
        }
        break;
    }
  }
  return concat(passwordArray);
}

// Gets and stores input from qualifying prompts for customizing generated password
function getUserInput(){
  do{
    complexity = window.prompt("Please specify password complexity:", "Low, Medium, High");
    if (complexity === null) return;
  }while(!isValid(complexity));

  do{
    passLength = window.prompt("Please specify the number of characters:", "8-128");
    if (passLength === null) return;
  }while(!(8 <= passLength && passLength <= 128));
  
  // Initializes array with length specified by user for password character population
  // Uses parseInt() to get a number because input from prompt is a string
  let passwordArray = new Array(parseInt(passLength));

  return passwordArray;
}