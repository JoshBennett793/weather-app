import { validateSearchQuery } from '../app/search-query';

function getAPIkey() {
  return '3535c8d31233d98b7f80c26b5b76e3a6';
}

async function getLocationCoords(location) {
  const weatherAPIurl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${getAPIkey()}`;
  try {
    const response = await fetch(weatherAPIurl, { mode: 'cors' });
    if (!response.ok) {
      if (response.state === 404) {
        return new Error('Location not found');
      }
      return new Error(
        `Geocode API call failed with status ${response.status}`,
      );
    }
    const weatherData = await response.json();
    const { lat } = weatherData[0];
    const { lon } = weatherData[0];
    return { lat, lon };
  } catch (err) {
    console.error(
      `Error fetching the geocoding API for location ${location}`,
      err,
    );
    return err;
  }
}

export async function fetchWeatherData(
  location,
  exclude,
  unit = 'imperial',
  endpoint = 'weather',
) {
  let weatherAPIurl;
  /* If the 'exclude' parameter is provided, use the One Call
API endpoint, which requires latitude and longitude
coordinates. Retrieve the coordinates using the location
parameter and plug them into the URL. For other endpoints,
use the location parameter directly.
*/
  if (exclude) {
    const coords = await getLocationCoords(location);
    weatherAPIurl = `https://api.openweathermap.org/data/3.0/onecall?lat=${
      coords.lat
    }&lon=${coords.lon}&&units=${unit}&exclude=${exclude}&appid=${getAPIkey()}`;
  } else {
    weatherAPIurl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${location}&&units=${unit}&appid=${getAPIkey()}`;
  }
  /* The function validateSearchQuery validates a string against
  a regex pattern and checks that it is not empty. */
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
      err,
    );
    return err;
  }
}

export function createConversionState() {
  let unit;

  function setConversionState(newUnit) {
    unit = newUnit;
  }

  function getConversionState() {
    return unit;
  }

  return {
    setConversionState,
    getConversionState,
  };
}

export async function extractWeatherData(location, unit, property) {
  let weatherData;
  let endpoint;
  let exclude;
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
    case 'daily':
      endpoint = 'onecall';
      exclude = 'current,minutely,hourly,alerts';
      break;
    default:
      return new Error(`Unsupported property "${property}"`);
  }
  try {
    weatherData = await fetchWeatherData(location, exclude, unit, endpoint);
  } catch (err) {
    console.error(
      `Error fetching ${endpoint} API for location "${location}": `,
      err,
    );
    return err;
  }
  switch (property) {
    case 'status':
      return weatherData.weather[0].main;
    case 'currentTemp':
      return Math.round(weatherData.main.temp);
    case 'feelsLike':
      return Math.round(weatherData.main.feels_like);
    case 'humidity':
      return weatherData.main.humidity;
    case 'windSpeed':
      return Math.round(weatherData.wind.speed);
    case 'precipitation':
      precipitation = weatherData.list[0].pop;
      if (precipitation !== undefined) {
        const parsedPrecipitation = parseFloat(precipitation).toFixed(2);
        const formattedPrecipitation = parsedPrecipitation * 100;
        return Math.round(formattedPrecipitation);
      }
      return new Error('Could not retrieve forecasted precipitation');
    case 'daily': {
      const forecastData = weatherData.daily.slice(1, 8).map((day) => ({
        day: new Date(day.dt * 1000).getDay(),
        status: day.weather[0].main,
        min: Math.round(day.temp.min),
        max: Math.round(day.temp.max),
      }));
      return forecastData;
    }
    default:
      return new Error(`Unsupported property "${property}"`);
  }
}

export async function getLocationNameFromJSON(location) {
  const locationData = await fetchWeatherData(location, null, 'weather');
  return locationData.name;
}
