// Assignment Code
var generateBtn = document.querySelector("#generate");

// Entire function for generating the password
function generatePassword() {

    // User selects which character types they want for password
    var includeLowercase = confirm("Would you like to add lowercase characters to your password?");
    var includeUppercase = confirm("Would you like to add uppercase characters to your password?");
    var includeNumbers = confirm("Would you like to add numbers to your password?");
    var includeSpecial = confirm("Would you like to add special characters to your password?");

    // Makes sure the user selects at least one character type
    while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        alert("You must select at least one character type.");
        includeLowercase = confirm("Would you like to add lowercase characters to your password?");
        includeUppercase = confirm("Would you like to add uppercase characters to your password?");
        includeNumbers = confirm("Would you like to add numbers to your password?");
        includeSpecial = confirm("Would you like to add special characters to your password?");
    }

    // All of the possible character choices
    var charSet = "";
    if (includeLowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charSet += "0123456789";
    if (includeSpecial) charSet += "!@#$%^&*()_+-={}[]|\":;',.<>?";

    // Sets the length of password and makes sure the requirements are met
      var length = prompt("Enter your desired password length (min 8, max 128 characters):");

      while (length < 8 || length > 128 || isNaN(length)) {
        length = prompt("Invalid length, please enter a password length of (min 8, max 128 characters):");
    }

    // Generates the password
    var password = "";

    for (var i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return password;
}

// Writes the password to the text area
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    // Adds some styling to user's new password
    passwordText.style.borderRadius = "5px";
    passwordText.style.width = "100%";
    passwordText.style.fontSize = "20px"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Selects the copy button
var copyBtn = document.querySelector("#copy");

// Copies the password to the user's clipboard
function copyPassword() {
    var passwordText = document.querySelector("#password");
    passwordText.select();
    document.execCommand("copy");
}

// Add event listener to copy button
copyBtn.addEventListener("click", copyPassword);