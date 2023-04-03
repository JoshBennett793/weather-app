import { validateSearchQuery } from '../search-query';

const weatherAPIkey = '3535c8d31233d98b7f80c26b5b76e3a6';

export async function fetchWeatherData(
  location,
  unit = 'imperial',
  endpoint = 'weather'
) {
  const weatherAPIurl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${location}&&units=${unit}&APPID=${weatherAPIkey}`;
  const searchQueryIsValid = validateSearchQuery(location);
  if (!searchQueryIsValid) {
    return new Error('Invalid search query');
  }
  try {
    const response = await fetch(weatherAPIurl, { mode: 'cors' });
    if (!response.ok) {
      if (response.status === 404) {
        return new Error('Location not found');
      }
      return new Error(`API call failed with status ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(
      `Error fetching the ${endpoint} API for location ${location}: `,
      err
    );
    return err;
  }
}

export async function extractWeatherData(location, unit, property) {
  let weatherData;
  let endpoint;
  let precipitation;
  switch (property) {
    case 'status':
    case 'currentTemp':
    case 'feelsLike':
    case 'humidity':
    case 'windSpeed':
      endpoint = 'weather';
      break;
    case 'precipitation':
      endpoint = 'forecast';
      break;
    default:
      return new Error(`Unsupported property "${property}"`);
  }
  try {
    weatherData = await fetchWeatherData(location, unit, endpoint);
  } catch (err) {
    console.error(
      `Error fetching ${endpoint} API for location "${location}": `,
      err
    );
    return err;
  }
  switch (property) {
    case 'status':
      return weatherData.weather[0].main;
    case 'currentTemp':
      return weatherData.main.temp;
    case 'feelsLike':
      return weatherData.main.feels_like;
    case 'humidity':
      return weatherData.main.humidity;
    case 'windSpeed':
      return weatherData.wind.speed;
    case 'precipitation':
      precipitation = weatherData.list[0].pop;
      if (precipitation !== undefined) {
        const parsedPrecipitation = parseFloat(precipitation).toFixed(1);
        const formattedPrecipitation = parsedPrecipitation * 100;
        return formattedPrecipitation;
      }
      return new Error('Could not retrieve forecasted precipitation');
    default:
      return new Error(`Unsupported property "${property}"`);
  }
}

export async function getLocationNameFromJSON(location) {
  const locationData = await fetchWeatherData(location, null, 'weather');
  return locationData.name;
}
