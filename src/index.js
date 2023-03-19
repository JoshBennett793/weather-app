import {
  extractLocationDateAndTime,
  extractCurrentTemps,
  extractHumidity,
  extractPrecipitation,
  extractWindSpeed,
} from './weather-data';
import '../src/css/header.css';

async function writeLocalDateTime(location, unit) {
  const dateSpan = document.getElementById('date');
  const timeSpan = document.getElementById('time');

  const dateTimeData = await extractLocationDateAndTime(location, unit);
  const date = dateTimeData.formattedDate;
  const time = dateTimeData.formattedTime;

  dateSpan.textContent = date;
  timeSpan.textContent = time;
}

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

writeCurrentTemps('Detroit Lakes', 'imperial');
writeHumidity('Detroit Lakes', 'imperial');
writePrecipitation('Detroit Lakes', 'imperial');
writeWindSpeed('Detroit Lakes', 'imperial');
writeLocalDateTime('Detroit Lakes', 'imperial');
