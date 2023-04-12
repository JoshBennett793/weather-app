"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["src_components_api_weather-data_js"],{

/***/ "./src/components/api/weather-data.js":
/*!********************************************!*\
  !*** ./src/components/api/weather-data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConversionState": () => (/* binding */ createConversionState),
/* harmony export */   "extractWeatherData": () => (/* binding */ extractWeatherData),
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData),
/* harmony export */   "getLocationNameFromJSON": () => (/* binding */ getLocationNameFromJSON)
/* harmony export */ });
/* harmony import */ var _app_search_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/search-query */ "./src/components/app/search-query.js");


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

async function fetchWeatherData(
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
  const searchQueryIsValid = (0,_app_search_query__WEBPACK_IMPORTED_MODULE_0__.validateSearchQuery)(location);
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

function createConversionState() {
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

async function extractWeatherData(location, unit, property) {
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

async function getLocationNameFromJSON(location) {
  const locationData = await fetchWeatherData(location, null, 'weather');
  return locationData.name;
}


/***/ }),

/***/ "./src/components/app/search-query.js":
/*!********************************************!*\
  !*** ./src/components/app/search-query.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLocationState": () => (/* binding */ createLocationState),
/* harmony export */   "getLocationFromUserInput": () => (/* binding */ getLocationFromUserInput),
/* harmony export */   "validateSearchQuery": () => (/* binding */ validateSearchQuery)
/* harmony export */ });
const searchBar = document.getElementById('location');

const getLocationFromUserInput = () => searchBar.value || 'Minneapolis';

const validateSearchQuery = (searchQuery) => {
  const searchRegex =
    /^([a-zA-Z\d\s+]*)(,\s*([a-zA-Z]{2})?)?(,\s+([a-zA-Z]{2})?)?$/;
  return searchQuery.length === 0 || searchRegex.test(searchQuery);
};

function createLocationState() {
  let location = 'Minneapolis';

  function setLocation(newLocation) {
    location = newLocation;
  }

  function getLocation() {
    return location;
  }

  return {
    setLocation,
    getLocation,
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYXBpX3dlYXRoZXItZGF0YV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSxTQUFTLGlCQUFpQixZQUFZO0FBQ2pIO0FBQ0Esa0RBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxnQkFBZ0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0EsdURBQXVELFNBQVM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLFdBQVcsVUFBVSxLQUFLLFdBQVcsUUFBUSxTQUFTLFlBQVk7QUFDOUUsSUFBSTtBQUNKLCtEQUErRCxTQUFTLEtBQUssU0FBUyxVQUFVLEtBQUssU0FBUyxZQUFZO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzRUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNEJBQTRCLFVBQVUsbUJBQW1CLFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx3QkFBd0IsVUFBVSxvQkFBb0IsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBOztBQUVPOztBQUVBO0FBQ1A7QUFDQSxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRTtBQUM1RDtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvYXBpL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9hcHAvc2VhcmNoLXF1ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9hcHAvc2VhcmNoLXF1ZXJ5JztcblxuZnVuY3Rpb24gZ2V0QVBJa2V5KCkge1xuICByZXR1cm4gJzM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2Jztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25Db29yZHMobG9jYXRpb24pIHtcbiAgY29uc3Qgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZsaW1pdD0xJmFwcGlkPSR7Z2V0QVBJa2V5KCl9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJBUEl1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0ZSA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEdlb2NvZGUgQVBJIGNhbGwgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWAsXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB7IGxhdCB9ID0gd2VhdGhlckRhdGFbMF07XG4gICAgY29uc3QgeyBsb24gfSA9IHdlYXRoZXJEYXRhWzBdO1xuICAgIHJldHVybiB7IGxhdCwgbG9uIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgZmV0Y2hpbmcgdGhlIGdlb2NvZGluZyBBUEkgZm9yIGxvY2F0aW9uICR7bG9jYXRpb259YCxcbiAgICAgIGVycixcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoXG4gIGxvY2F0aW9uLFxuICBleGNsdWRlLFxuICB1bml0ID0gJ2ltcGVyaWFsJyxcbiAgZW5kcG9pbnQgPSAnd2VhdGhlcicsXG4pIHtcbiAgbGV0IHdlYXRoZXJBUEl1cmw7XG4gIC8qIElmIHRoZSAnZXhjbHVkZScgcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB1c2UgdGhlIE9uZSBDYWxsXG5BUEkgZW5kcG9pbnQsIHdoaWNoIHJlcXVpcmVzIGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcbmNvb3JkaW5hdGVzLiBSZXRyaWV2ZSB0aGUgY29vcmRpbmF0ZXMgdXNpbmcgdGhlIGxvY2F0aW9uXG5wYXJhbWV0ZXIgYW5kIHBsdWcgdGhlbSBpbnRvIHRoZSBVUkwuIEZvciBvdGhlciBlbmRwb2ludHMsXG51c2UgdGhlIGxvY2F0aW9uIHBhcmFtZXRlciBkaXJlY3RseS5cbiovXG4gIGlmIChleGNsdWRlKSB7XG4gICAgY29uc3QgY29vcmRzID0gYXdhaXQgZ2V0TG9jYXRpb25Db29yZHMobG9jYXRpb24pO1xuICAgIHdlYXRoZXJBUEl1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7XG4gICAgICBjb29yZHMubGF0XG4gICAgfSZsb249JHtjb29yZHMubG9ufSYmdW5pdHM9JHt1bml0fSZleGNsdWRlPSR7ZXhjbHVkZX0mYXBwaWQ9JHtnZXRBUElrZXkoKX1gO1xuICB9IGVsc2Uge1xuICAgIHdlYXRoZXJBUEl1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41LyR7ZW5kcG9pbnR9P3E9JHtsb2NhdGlvbn0mJnVuaXRzPSR7dW5pdH0mYXBwaWQ9JHtnZXRBUElrZXkoKX1gO1xuICB9XG4gIC8qIFRoZSBmdW5jdGlvbiB2YWxpZGF0ZVNlYXJjaFF1ZXJ5IHZhbGlkYXRlcyBhIHN0cmluZyBhZ2FpbnN0XG4gIGEgcmVnZXggcGF0dGVybiBhbmQgY2hlY2tzIHRoYXQgaXQgaXMgbm90IGVtcHR5LiAqL1xuICBjb25zdCBzZWFyY2hRdWVyeUlzVmFsaWQgPSB2YWxpZGF0ZVNlYXJjaFF1ZXJ5KGxvY2F0aW9uKTtcbiAgaWYgKCFzZWFyY2hRdWVyeUlzVmFsaWQpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHNlYXJjaCBxdWVyeScpO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQVBJdXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTG9jYXRpb24gbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBBUEkgY2FsbCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyB0aGUgJHtlbmRwb2ludH0gQVBJIGZvciBsb2NhdGlvbiAke2xvY2F0aW9ufTogYCxcbiAgICAgIGVycixcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnZlcnNpb25TdGF0ZSgpIHtcbiAgbGV0IHVuaXQ7XG5cbiAgZnVuY3Rpb24gc2V0Q29udmVyc2lvblN0YXRlKG5ld1VuaXQpIHtcbiAgICB1bml0ID0gbmV3VW5pdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnZlcnNpb25TdGF0ZSgpIHtcbiAgICByZXR1cm4gdW5pdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0Q29udmVyc2lvblN0YXRlLFxuICAgIGdldENvbnZlcnNpb25TdGF0ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCwgcHJvcGVydHkpIHtcbiAgbGV0IHdlYXRoZXJEYXRhO1xuICBsZXQgZW5kcG9pbnQ7XG4gIGxldCBleGNsdWRlO1xuICBsZXQgcHJlY2lwaXRhdGlvbjtcbiAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgIGNhc2UgJ3N0YXR1cyc6XG4gICAgY2FzZSAnY3VycmVudFRlbXAnOlxuICAgIGNhc2UgJ2ZlZWxzTGlrZSc6XG4gICAgY2FzZSAnaHVtaWRpdHknOlxuICAgIGNhc2UgJ3dpbmRTcGVlZCc6XG4gICAgICBlbmRwb2ludCA9ICd3ZWF0aGVyJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZWNpcGl0YXRpb24nOlxuICAgICAgZW5kcG9pbnQgPSAnZm9yZWNhc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGFpbHknOlxuICAgICAgZW5kcG9pbnQgPSAnb25lY2FsbCc7XG4gICAgICBleGNsdWRlID0gJ2N1cnJlbnQsbWludXRlbHksaG91cmx5LGFsZXJ0cyc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiYCk7XG4gIH1cbiAgdHJ5IHtcbiAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIGV4Y2x1ZGUsIHVuaXQsIGVuZHBvaW50KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyAke2VuZHBvaW50fSBBUEkgZm9yIGxvY2F0aW9uIFwiJHtsb2NhdGlvbn1cIjogYCxcbiAgICAgIGVycixcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbiAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgIGNhc2UgJ3N0YXR1cyc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIGNhc2UgJ2N1cnJlbnRUZW1wJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG4gICAgY2FzZSAnZmVlbHNMaWtlJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgY2FzZSAnaHVtaWRpdHknOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgY2FzZSAnd2luZFNwZWVkJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLndpbmQuc3BlZWQpO1xuICAgIGNhc2UgJ3ByZWNpcGl0YXRpb24nOlxuICAgICAgcHJlY2lwaXRhdGlvbiA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ucG9wO1xuICAgICAgaWYgKHByZWNpcGl0YXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBwYXJzZWRQcmVjaXBpdGF0aW9uID0gcGFyc2VGbG9hdChwcmVjaXBpdGF0aW9uKS50b0ZpeGVkKDIpO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcmVjaXBpdGF0aW9uID0gcGFyc2VkUHJlY2lwaXRhdGlvbiAqIDEwMDtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZm9ybWF0dGVkUHJlY2lwaXRhdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdDb3VsZCBub3QgcmV0cmlldmUgZm9yZWNhc3RlZCBwcmVjaXBpdGF0aW9uJyk7XG4gICAgY2FzZSAnZGFpbHknOiB7XG4gICAgICBjb25zdCBmb3JlY2FzdERhdGEgPSB3ZWF0aGVyRGF0YS5kYWlseS5zbGljZSgxLCA4KS5tYXAoKGRheSkgPT4gKHtcbiAgICAgICAgZGF5OiBuZXcgRGF0ZShkYXkuZHQgKiAxMDAwKS5nZXREYXkoKSxcbiAgICAgICAgc3RhdHVzOiBkYXkud2VhdGhlclswXS5tYWluLFxuICAgICAgICBtaW46IE1hdGgucm91bmQoZGF5LnRlbXAubWluKSxcbiAgICAgICAgbWF4OiBNYXRoLnJvdW5kKGRheS50ZW1wLm1heCksXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gZm9yZWNhc3REYXRhO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiYCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uTmFtZUZyb21KU09OKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIG51bGwsICd3ZWF0aGVyJyk7XG4gIHJldHVybiBsb2NhdGlvbkRhdGEubmFtZTtcbn1cbiIsImNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0ID0gKCkgPT4gc2VhcmNoQmFyLnZhbHVlIHx8ICdNaW5uZWFwb2xpcyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNlYXJjaFF1ZXJ5ID0gKHNlYXJjaFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFJlZ2V4ID1cbiAgICAvXihbYS16QS1aXFxkXFxzK10qKSgsXFxzKihbYS16QS1aXXsyfSk/KT8oLFxccysoW2EtekEtWl17Mn0pPyk/JC87XG4gIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgfHwgc2VhcmNoUmVnZXgudGVzdChzZWFyY2hRdWVyeSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25TdGF0ZSgpIHtcbiAgbGV0IGxvY2F0aW9uID0gJ01pbm5lYXBvbGlzJztcblxuICBmdW5jdGlvbiBzZXRMb2NhdGlvbihuZXdMb2NhdGlvbikge1xuICAgIGxvY2F0aW9uID0gbmV3TG9jYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldExvY2F0aW9uLFxuICAgIGdldExvY2F0aW9uLFxuICB9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==