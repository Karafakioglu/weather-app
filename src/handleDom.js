const body = document.querySelector("body");

const form = document.createElement("form");
const label = document.createElement("label");
label.setAttribute("for", "city");
label.innerText = "Enter a city";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "city");
input.setAttribute("id", "city");

export const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("id", "submit-btn");
submitButton.innerText = "Submit";

export const toggleBtn = document.createElement("button");
toggleBtn.setAttribute("type", "submit");
toggleBtn.setAttribute("id", "toggle-btn");
toggleBtn.innerText = "Toggle";

body.append(form);
form.append(label, input, submitButton);

export function createWeatherDom(data) {
  const weatherCard = document.createElement("div");
  weatherCard.setAttribute("id", "weather-card-div");

  const cityDiv = document.createElement("div");
  cityDiv.setAttribute("class", "city-div");
  const cityTitle = document.createElement("p");
  cityTitle.innerText = "City";
  const city = document.createElement("p");
  city.innerText = data.address;
  cityDiv.append(cityTitle, city);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("class", "description-div");
  const descriptionTitle = document.createElement("p");
  descriptionTitle.innerText = "Description";
  const description = document.createElement("p");
  description.innerText = data.description;
  descriptionDiv.append(descriptionTitle, description);

  const feelsLikeDiv = document.createElement("div");
  feelsLikeDiv.setAttribute("class", "feels-like-div");
  const feelsLikeTitle = document.createElement("p");
  feelsLikeTitle.innerText = "Feels Like";
  const feelsLike = document.createElement("p");
  feelsLike.innerText = data.feelsLike;
  feelsLikeDiv.append(feelsLikeTitle, feelsLike);

  const tempDiv = document.createElement("div");
  tempDiv.setAttribute("class", "temp-div");
  const tempTitle = document.createElement("p");
  tempTitle.innerText = "Temperature";
  const temp = document.createElement("p");
  temp.innerText = data.temp;
  tempDiv.append(tempTitle, temp);

  weatherCard.append(cityDiv, descriptionDiv, feelsLikeDiv, tempDiv, toggleBtn);
  body.append(weatherCard);
}

export function clearWeatherCard() {
  const weatherCard = document.getElementById("weather-card-div");
  if (weatherCard) weatherCard.remove();
}

const spinner = document.createElement("div");
spinner.setAttribute("class", "spinner");
spinner.style.height = 100;
spinner.style.width = 100;
spinner.style.display = "none";

body.append(spinner);

export function showSpinner() {
  spinner.style.display = "block";
}

export function hideSpinner() {
  spinner.style.display = "none";
}
