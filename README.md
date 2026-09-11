# Weather App

A weather forecast app built with vanilla JavaScript. Search for a city and see its current conditions, with a toggle between Fahrenheit and Celsius.

Part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app) Full Stack JavaScript path.

[Demo](https://karafakioglu.github.io/weather-app/)

## Features

- Search weather by city name
- Displays city, description, temperature, and "feels like" temperature
- Toggle between Fahrenheit and Celsius — the selected unit persists across searches
- Loading spinner while the request is in flight
- Error handling for invalid or empty city input

## Built with

- Vanilla JavaScript (ES modules)
- Webpack
- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)

## What I learned

- `fetch` with `async`/`await`, and why code after a request runs before the response arrives
- Where to handle errors: letting `getWeatherData` throw and catching it in the caller, which can actually decide what to do
- Using `finally` to clean up regardless of success or failure
- Building and clearing DOM elements from JavaScript
- CSS animations with `@keyframes`

## Note on the API key

The API key is committed in the source. This is intentional and follows the project instructions — it's a free key with no consequence if exposed.

## Running locally

\`\`\`
npm install
npm run build
\`\`\`

Then open `dist/index.html`.
