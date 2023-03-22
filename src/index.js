import {
  extractCurrentTemps,
  extractHumidity,
  extractPrecipitation,
  extractWindSpeed,
} from './components/api/weather-data';
import {
  getLocationFromUserInput,
  writeLocalDateTime,
} from './components/header/header';

async function writeCurrentTemps(location, unit) {
  const currentTemps = await extractCurrentTemps(location, unit);
  const currentTemp = document.getElementById('current-temp');
  const feelsLike = document.getElementById('feels-like');

  currentTemp.textContent = `Currently: ${currentTemps.temp}°`;
  feelsLike.textContent = `Feels Like: ${currentTemps.feels_like}°`;
}

async function writeHumidity(location, unit) {
  const currentHumidity = await extractHumidity(location, unit);
  const humiditySpan = document.getElementById('humidity');

  humiditySpan.textContent = `Humidity: ${currentHumidity}%`;
}

async function writePrecipitation(location, unit) {
  const currentPrecipitation = await extractPrecipitation(location, unit);
  const precipitationSpan = document.getElementById('precipitation');

  precipitationSpan.textContent = `Precipitation: ${currentPrecipitation}%`;
}

async function writeWindSpeed(location, unit) {
  const currentWindSpeed = await extractWindSpeed(location, unit);
  const windSpeedSpan = document.getElementById('wind-speed');

  windSpeedSpan.textContent =
    unit === 'imperial'
      ? `Wind Speed: ${currentWindSpeed} MPH`
      : `Wind Speed: ${currentWindSpeed} KM/H`;
}

const renderWeatherData = () => {
  const location = getLocationFromUserInput();

  writeLocalDateTime(location || 'Minneapolis', 'imperial');
  writeCurrentTemps(location || 'Minneapolis', 'imperial');
  writeHumidity(location || 'Minneapolis', 'imperial');
  writePrecipitation(location || 'Minneapolis', 'imperial');
  writeWindSpeed(location || 'Minneapolis', 'imperial');
};

renderWeatherData();

const searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', renderWeatherData);
