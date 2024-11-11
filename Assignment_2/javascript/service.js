// Get DOM elements
const tutorialCities = document.getElementById("tutorialCities");
const addCityButton = document.getElementById("addCity");
const removeCityButton = document.getElementById("removeCity");

// Event listener for "Add City" button
addCityButton.addEventListener("click", () => {
    const newCity = prompt("Enter the name of a new city for tutorials:");
    if (newCity) {
        const newCityElement = document.createElement("li");
        newCityElement.textContent = newCity; // Set the city's name as the content
        tutorialCities.appendChild(newCityElement); // Add the new city to the list
    } else {
        alert("City name cannot be empty!");
    }
});

// Event listener for "Remove Last City" button
removeCityButton.addEventListener("click", () => {
    if (tutorialCities.lastChild) {
        tutorialCities.removeChild(tutorialCities.lastChild); // Remove the last city
    } else {
        alert("No more cities to remove!"); // Alert if the list is empty
    }
});
