import { getLocationFromUserInput } from '../search-query';

import writeLocation from '../header/header';

import { extractWeatherData } from '../api/weather-data';

import createCardElement from '../cards/cards';

import '../weather/main-weather-ui.css';

export default async function renderWeatherData() {
  let unit;

  const location = getLocationFromUserInput() ?? 'Minneapolis';
  writeLocation();

  const properties = [
    'status',
    'currentTemp',
    'feelsLike',
    'humidity',
    'precipitation',
    'windSpeed',
    'daily',
  ];

  try {
    const weatherData = await Promise.all(
      properties.map((property) =>
        extractWeatherData(location, (unit = 'imperial'), property),
      ),
    );

    const statusEl = document.getElementById('weather-status');
    const currentTempEl = document.getElementById('current-temp');
    const feelsLikeEl = document.getElementById('feels-like-temp');
    const humidityEl = document.getElementById('humidity-percentage');
    const precipitationEl = document.getElementById('precipitation-percentage');
    const windSpeedEl = document.getElementById('wind-speed-percentage');
    const cardsContainer = document.getElementById('bottom-cards-container');
    cardsContainer.textContent = '';

    const [
      status,
      currentTemp,
      feelsLike,
      humidity,
      precipitation,
      windSpeed,
      daily,
    ] = weatherData;

    statusEl.textContent = status;
    currentTempEl.textContent = `${currentTemp}°`;
    feelsLikeEl.textContent = `${feelsLike}°`;
    humidityEl.textContent = `${humidity}%`;
    precipitationEl.textContent = `${precipitation}%`;
    windSpeedEl.textContent =
      unit === 'imperial' ? `${windSpeed} MPH` : `${windSpeed} KM/H`;
    for (let i = 0; i < 7; i += 1) {
      cardsContainer.appendChild(
        createCardElement(
          i,
          daily[i].day,
          daily[i].status,
          daily[i].max,
          daily[i].min,
        ),
      );
    }
  } catch (err) {
    console.error('There was an error writing weather data to the DOM: ', err);
  }
}
