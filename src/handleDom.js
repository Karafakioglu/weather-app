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

body.append(form, toggleBtn);
form.append(label, input, submitButton);

export function createWeatherDom(data) {
  const weatherCard = document.createElement("div");
  weatherCard.setAttribute("id", "weather-card-div");

  const city = document.createElement("p");
  city.innerText = data.address;

  const description = document.createElement("p");
  description.innerText = data.description;

  const feelsLike = document.createElement("p");
  feelsLike.innerText = data.feelsLike;

  const temp = document.createElement("p");
  temp.innerText = data.temp;

  weatherCard.append(city, description, feelsLike, temp);
  body.append(weatherCard);
}

export function clearWeatherCard() {
  const weatherCard = document.getElementById("weather-card-div");
  if (weatherCard) weatherCard.remove();
}
