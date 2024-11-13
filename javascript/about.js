// JavaScript to handle button events

// Get DOM elements
const detailsSection = document.getElementById("details");
const showDetailsButton = document.getElementById("showDetails");
const hideDetailsButton = document.getElementById("hideDetails");
const changeBgColorButton = document.getElementById("changeBgColor");

// Event listener for "Show Details" button
showDetailsButton.addEventListener("click", () => {
    detailsSection.style.display = "block"; // Show the hidden section
});

// Event listener for "Hide Details" button
hideDetailsButton.addEventListener("click", () => {
    detailsSection.style.display = "none"; // Hide the section
});

// Event listener for "Change Background Color" button
changeBgColorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = generateRandomColor(); // Change background color
});

// Function to generate a random color
function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
