
//selecting all HTML elements we need
const weatherForm = document.querySelector(".weatherForm");

const cityInput = document.querySelector(".cityInput");

const card = document.querySelector(".card");

//api key
const apiKey = "d673d206bc45cf4a1ee77a0498a98166";

weatherForm.addEventListener("submit", event => {

    //prevent per evitare il refresh della pagina
    event.preventDefault();

    const city = cityInput.value;

    if (city) {
        try {

        } catch (error) {
            console.error(error);
            displayError(error)
        }
    } else {
        displayError("Devi inserire una città")
    }

});

async function getWeatherData(city) {

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {
    const errorDisplay = document.createElement("p");

    errorDisplay.textContent = message;

    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}