//fetch does not work with new Promise because fetch already returns a promise.
//this is how to use it with .then and .catch

// function getBible(URL) {
//   return fetch(URL).then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw Error(response.status);
//     }
//   });
// }

// getBible(URL)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//returns {verse: '1', text: 'In the beginning God created the heavens and the earth.'} which you can use in the then section with response.verse or response.text

//Down below is the example using async await. You can either assign it to outer variable by calling await in the beginning of the outer variable assignment or down below
// let x;

// async function getBible(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// x = await getBible(URL);
// console.log(x);

//you can call the main function inside the async function to be called later

// function log(x) {
//   console.log(x);
// }

// async function getBible(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getBible(URL);
import "./style.css";

const apiKey = "G3WLXSKUZVJETRD27KXB5QR44"; //Please no steal :(

async function getWeatherData(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${apiKey}`,
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  const weatherInFahrenheit = data.currentConditions.temp;
  console.log(weatherInFahrenheit);
}

globalThis.getWeatherData = getWeatherData;
