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
import './components/weather/main-weather-ui.css';

async function writeCurrentTemps(location, unit) {
  try {
    const currentTemps = await extractCurrentTemps(location, unit);
    const currentTemp = document.getElementById('current-temp');
    const feelsLike = document.getElementById('feels-like-temp');

    currentTemp.textContent = `${currentTemps.temp}°`;
    feelsLike.textContent = `${currentTemps.feels_like}°`;
  } catch (err) {
    console.error('There was an error writing temps to the DOM: ', err);
  }
}

async function writeHumidity(location, unit) {
  try {
    const currentHumidity = await extractHumidity(location, unit);
    const humidity = document.getElementById('humidity-percentage');

    humidity.textContent = `${currentHumidity}%`;
  } catch (err) {
    console.error('There was an error writing humidity to the DOM: ', err);
  }
}

async function writePrecipitation(location, unit) {
  try {
    const currentPrecipitation = await extractPrecipitation(location, unit);
    const precipitation = document.getElementById('precipitation-percentage');

    precipitation.textContent = `${currentPrecipitation}%`;
  } catch (err) {
    console.error('There was an error writing precipitation to the DOM: ', err);
  }
}

async function writeWindSpeed(location, unit) {
  try {
    const currentWindSpeed = await extractWindSpeed(location, unit);
    const windSpeed = document.getElementById('wind-speed-percentage');

    windSpeed.textContent =
      unit === 'imperial'
        ? `${currentWindSpeed} MPH`
        : `${currentWindSpeed} KM/H`;
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
