// Initial cities array
let cities = ["Islamabad", "karachi", "lahore"];
let selectedCities = new Set();
// Get DOM elements
const tutorialCities = document.getElementById("tutorialCities");
const addCityButton = document.getElementById("addCity");
const removeCityButton = document.getElementById("removeCity");
// Initialize the list of cities
window.onload = function () {

    document.getElementById("confirmAddCity").addEventListener("click", addCity);
    document.getElementById("confirmRemoveCity").addEventListener("click", removeCity);
    document.getElementById("closeAddCityModal").addEventListener("click", () => closeModal("addCityModal"));
    document.getElementById("closeRemoveCityModal").addEventListener("click", () => closeModal("removeCityModal"));
    renderCityList();
    document.getElementById("addCityBtn").onclick = () => openModal("addCityModal");
    document.getElementById("removeCityBtn").onclick = () => {
        if (selectedCities.size === 0) {
            alert("Please select at least one city to remove.");
            return;
        } openModal("removeCityModal")

    };
};

// Render city list and update select dropdown
function renderCityList() {
    const cityList = document.getElementById("cityList");
    cityList.innerHTML = "";
    cities.forEach(city => {
        const li = document.createElement("li");
        li.textContent = city;
        li.onclick = () => toggleCitySelection(city);
        if (selectedCities.has(city)) li.classList.add("selected");
        cityList.appendChild(li);
    });
    updateRemoveCityDropdown();
}


// Toggle selection for a city
function toggleCitySelection(city) {
    if (selectedCities.has(city)) {
        selectedCities.delete(city);
    } else {
        selectedCities.add(city);
    }
    renderCityList();
}

// Open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Add city to the list
function addCity() {
    const newCityInput = document.getElementById("newCityInput");
    const newCity = newCityInput.value.trim();
    if (newCity && !cities.includes(newCity)) {
        cities.push(newCity);
        newCityInput.value = "";
        closeModal("addCityModal");
        renderCityList();
    }
}

// Remove city from the list
function removeCity() {
    if (selectedCities.size === 0) {
        alert("Please select at least one city to remove.");
        return;
    }
    cities = cities.filter(city => !selectedCities.has(city));
    selectedCities.clear();
    closeModal('removeCityModal')
    // Clear selection after removal
    renderCityList();  // Refresh city list display
}

// Update remove city dropdown
function updateRemoveCityDropdown() {
    const removeCitySelect = document.getElementById("removeCitySelect");
    removeCitySelect.innerHTML = cities.map(city => `<option value="${city}">${city}</option>`).join("");
}

