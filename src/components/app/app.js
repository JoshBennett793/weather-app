import { extractWeatherData } from '../api/weather-data';

import writeLocation from '../header/header';

import { getLocationFromUserInput } from '../search-query';

import '../weather/main-weather-ui.css';

async function writeWeatherData(location, unit, properties) {
  try {
    const weatherData = await Promise.all(
      properties.map((property) => extractWeatherData(location, unit, property))
    );

    const statusEl = document.getElementById('weather-status');
    const currentTempEl = document.getElementById('current-temp');
    const feelsLikeEl = document.getElementById('feels-like-temp');
    const humidityEl = document.getElementById('humidity-percentage');
    const precipitationEl = document.getElementById('precipitation-percentage');
    const windSpeedEl = document.getElementById('wind-speed-percentage');

    const [status, currentTemp, feelsLike, humidity, precipitation, windSpeed] =
      weatherData;

    statusEl.textContent = status;
    currentTempEl.textContent = `${currentTemp}°`;
    feelsLikeEl.textContent = `${feelsLike}°`;
    humidityEl.textContent = `${humidity}%`;
    precipitationEl.textContent = `${precipitation}%`;
    windSpeedEl.textContent =
      unit === 'imperial' ? `${windSpeed} MPH` : `${windSpeed} KM/H`;
  } catch (err) {
    console.error('There was an error writing weather data to the DOM: ', err);
  }
}

export default async function renderWeatherData() {
  const location = getLocationFromUserInput() ?? 'Minneapolis';

  writeLocation();

  const properties = [
    'status',
    'currentTemp',
    'feelsLike',
    'humidity',
    'precipitation',
    'windSpeed',
  ];
  await writeWeatherData(location, 'imperial', properties);
}
