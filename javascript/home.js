// References to DOM elements
const welcomeText = document.getElementById("welcomeText");
const changeStyleBtn = document.getElementById("changeStyleBtn");
const resetStyleBtn = document.getElementById("resetStyleBtn");

// Change Text Style
changeStyleBtn.addEventListener("click", () => {
    welcomeText.style.fontWeight = "bold"; // Make bold
    welcomeText.style.fontStyle = "italic"; // Make italic
    welcomeText.style.color = "blue"; // Change text color
});

// Reset Text Style
resetStyleBtn.addEventListener("click", () => {
    welcomeText.style.fontWeight = "normal"; // Reset to normal
    welcomeText.style.fontStyle = "normal"; // Reset to normal
    welcomeText.style.color = "black"; // Reset text color
});
