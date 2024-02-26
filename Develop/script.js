// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Create Array for lowercase letters
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Create Array for Uppercase letters
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Create Array for Numbers
var numbers = ["0","1","2","3","4","5","6","7","8","9",];
// Create Array for special characters
var specialChar =  ["!",'"','#',"$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","]","[","^","_","`","{","|","}","~",];


// Function to generate password
function passwordGen(){
  userInput=parseInt(prompt("Choose a password between 8 and 128 characters"));
  // If length is not a number, or length is less than 8 or greater than 128 
  if(isNaN(userInput) || userInput < 8 || userInput > 128){
    alert("Error, please choose a number between 8 and 128")
  // add string after return or it will return undefined
   return""}
  // variables for storing user choices
   var chooseLowercase = confirm ("Add Lowercase Characters")

   var chooseUppercase = confirm ("Add Uppercase Characters")

   var chooseSpecial = confirm   ("Add Special Characters")

   var chooseNumbers = confirm ("Add Numbers")

   var password =""
   
   var chosenChar=[]
  
   //  if user did not choose any option
   if (!(chooseLowercase || chooseUppercase || chooseSpecial || chooseNumbers )){
   alert("Error, Must Select at least one option");
  return""}
  // If the user confirms the selections above it will add it to the new array
  // Used concat to merge elements in the different arrays into new array (chosenChar)
   if (chooseLowercase){
    chosenChar=chosenChar.concat(lowercaseChar)
  }

   if (chooseUppercase){
    chosenChar=chosenChar.concat(uppercaseChar)
   }

   if (chooseSpecial){
    chosenChar=chosenChar.concat(specialChar)

   }
   if (chooseNumbers){
    chosenChar=chosenChar.concat(numbers)
   }
  //   if the user input is greater than zero increment to match the user input
   for(var i = 0; i < userInput; i++){
    // creates a new array by randzomizing the chosen characters 
    var newArray = Math.floor(Math.random()*chosenChar.length);
    // creates password from the randomized array
    password += chosenChar[newArray]
   } 

   return password;
}
// Write password to the #password input
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
