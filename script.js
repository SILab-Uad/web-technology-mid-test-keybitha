// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let allChars = "";
    if (options.includeUppercase) allChars += uppercase;
    if (options.includeLowercase) allChars += lowercase;
    if (options.includeNumbers) allChars += numbers;
    if (options.includeSpecialChars) allChars += specialChars;

    // TODO: Generate the password based on the selected criteria
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
const password = generatePassword(length, options);
    document.getElementById("passwordOutput").value = password;
    document.getElementById("copyBtn").addEventListener("click", () => {
        const password = document.getElementById("passwordOutput").value;
        copyToClipboard(password);
    });

// BONUS: Implement the copy to clipboard functionality
