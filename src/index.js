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
  try {
    const currentTemps = await extractCurrentTemps(location, unit);
    const currentTemp = document.getElementById('current-temp');
    const feelsLike = document.getElementById('feels-like');

    currentTemp.textContent = `Currently: ${currentTemps.temp}°`;
    feelsLike.textContent = `Feels Like: ${currentTemps.feels_like}°`;
  } catch (err) {
    console.error('There was an error writing temps to the DOM: ', err);
  }
}

async function writeHumidity(location, unit) {
  try {
    const currentHumidity = await extractHumidity(location, unit);
    const humiditySpan = document.getElementById('humidity');

    humiditySpan.textContent = `Humidity: ${currentHumidity}%`;
  } catch (err) {
    console.error('There was an error writing humidity to the DOM: ', err);
  }
}

async function writePrecipitation(location, unit) {
  try {
    const currentPrecipitation = await extractPrecipitation(location, unit);
    const precipitationSpan = document.getElementById('precipitation');

    precipitationSpan.textContent = `Precipitation: ${currentPrecipitation}%`;
  } catch (err) {
    console.error('There was an error writing precipitation to the DOM: ', err);
  }
}

async function writeWindSpeed(location, unit) {
  try {
    const currentWindSpeed = await extractWindSpeed(location, unit);
    const windSpeedSpan = document.getElementById('wind-speed');

    windSpeedSpan.textContent =
      unit === 'imperial'
        ? `Wind Speed: ${currentWindSpeed} MPH`
        : `Wind Speed: ${currentWindSpeed} KM/H`;
  } catch (err) {
    console.error('There was an error writing windspeed to the DOM: ', err);
  }
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
