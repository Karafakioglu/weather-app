import "./style.css";
import {
  submitButton,
  toggleBtn,
  createWeatherDom,
  clearWeatherCard,
} from "./handleDom.js";
import * as tempHandler from "./helperFunction.js";

let weatherData = {};

function logWeatherData() {
  console.log(weatherData);
}

globalThis.logWeatherData = logWeatherData;

const apiKey = "G3WLXSKUZVJETRD27KXB5QR44"; //Please no steal :(

async function getWeatherData(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${apiKey}`,
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return data;
}

function processWeatherData(weatherData) {
  const data = weatherData;
  const address = data.address;
  const description = data.description;
  const temp = data.currentConditions.temp;
  const feelsLike = data.currentConditions.feelslike;
  const isFahrenheit = true;
  return {
    address,
    description,
    temp,
    feelsLike,
    isFahrenheit,
  };
}

function storeData(data) {
  weatherData = data;
}

// submitButton.addEventListener("click", async (e) => {
//   try {
//     e.preventDefault();
//     const inputValue = document.getElementById("city").value;
//     const data = await getWeatherData(inputValue);
//     let processed = processWeatherData(data);
//     console.log(processed);
//     createWeatherDom(processed);
//   } catch (error) {
//     console.log(error);
//   }
// });

// submitButton.addEventListener("click", async (e) => {
//   try {
//     e.preventDefault();
//     const inputValue = document.getElementById("city").value;
//     const data = await getWeatherData(inputValue);
//     let processed = processWeatherData(data);
//     storeData(processed);
//     createWeatherDom(processed);
//   } catch (error) {
//     console.log(error);
//   }
// });

submitButton.addEventListener("click", async (e) => {
  if (Object.keys(weatherData).length === 0) {
    try {
      e.preventDefault();
      const inputValue = document.getElementById("city").value;
      const data = await getWeatherData(inputValue);
      let processed = processWeatherData(data);
      storeData(processed);
      createWeatherDom(processed);
    } catch (error) {
      console.log(error);
    }
  } else {
    clearWeatherCard();
    try {
      e.preventDefault();
      const inputValue = document.getElementById("city").value;
      const data = await getWeatherData(inputValue);
      let processed = processWeatherData(data);
      storeData(processed);
      createWeatherDom(processed);
    } catch (error) {
      console.log(error);
    }
  }
});
