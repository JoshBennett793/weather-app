"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["weather"],{

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
  const weatherAPIurl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${getAPIkey()}`;
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/api/weather-data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxTQUFTLGlCQUFpQixZQUFZO0FBQ2hIO0FBQ0Esa0RBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxnQkFBZ0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0EsdURBQXVELFNBQVM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLFdBQVcsVUFBVSxLQUFLLFdBQVcsUUFBUSxTQUFTLFlBQVk7QUFDOUUsSUFBSTtBQUNKLCtEQUErRCxTQUFTLEtBQUssU0FBUyxVQUFVLEtBQUssU0FBUyxZQUFZO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzRUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNEJBQTRCLFVBQVUsbUJBQW1CLFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx3QkFBd0IsVUFBVSxvQkFBb0IsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBOztBQUVPOztBQUVBO0FBQ1A7QUFDQSxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRTtBQUM1RDtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvYXBpL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9hcHAvc2VhcmNoLXF1ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9hcHAvc2VhcmNoLXF1ZXJ5JztcblxuZnVuY3Rpb24gZ2V0QVBJa2V5KCkge1xuICByZXR1cm4gJzM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2Jztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25Db29yZHMobG9jYXRpb24pIHtcbiAgY29uc3Qgd2VhdGhlckFQSXVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTEmYXBwaWQ9JHtnZXRBUElrZXkoKX1gO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXRlID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTG9jYXRpb24gbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgR2VvY29kZSBBUEkgY2FsbCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHsgbGF0IH0gPSB3ZWF0aGVyRGF0YVswXTtcbiAgICBjb25zdCB7IGxvbiB9ID0gd2VhdGhlckRhdGFbMF07XG4gICAgcmV0dXJuIHsgbGF0LCBsb24gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyB0aGUgZ2VvY29kaW5nIEFQSSBmb3IgbG9jYXRpb24gJHtsb2NhdGlvbn1gLFxuICAgICAgZXJyLFxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShcbiAgbG9jYXRpb24sXG4gIGV4Y2x1ZGUsXG4gIHVuaXQgPSAnaW1wZXJpYWwnLFxuICBlbmRwb2ludCA9ICd3ZWF0aGVyJyxcbikge1xuICBsZXQgd2VhdGhlckFQSXVybDtcbiAgLyogSWYgdGhlICdleGNsdWRlJyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHVzZSB0aGUgT25lIENhbGxcbkFQSSBlbmRwb2ludCwgd2hpY2ggcmVxdWlyZXMgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuY29vcmRpbmF0ZXMuIFJldHJpZXZlIHRoZSBjb29yZGluYXRlcyB1c2luZyB0aGUgbG9jYXRpb25cbnBhcmFtZXRlciBhbmQgcGx1ZyB0aGVtIGludG8gdGhlIFVSTC4gRm9yIG90aGVyIGVuZHBvaW50cyxcbnVzZSB0aGUgbG9jYXRpb24gcGFyYW1ldGVyIGRpcmVjdGx5LlxuKi9cbiAgaWYgKGV4Y2x1ZGUpIHtcbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRMb2NhdGlvbkNvb3Jkcyhsb2NhdGlvbik7XG4gICAgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtcbiAgICAgIGNvb3Jkcy5sYXRcbiAgICB9Jmxvbj0ke2Nvb3Jkcy5sb259JiZ1bml0cz0ke3VuaXR9JmV4Y2x1ZGU9JHtleGNsdWRlfSZhcHBpZD0ke2dldEFQSWtleSgpfWA7XG4gIH0gZWxzZSB7XG4gICAgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvJHtlbmRwb2ludH0/cT0ke2xvY2F0aW9ufSYmdW5pdHM9JHt1bml0fSZhcHBpZD0ke2dldEFQSWtleSgpfWA7XG4gIH1cbiAgLyogVGhlIGZ1bmN0aW9uIHZhbGlkYXRlU2VhcmNoUXVlcnkgdmFsaWRhdGVzIGEgc3RyaW5nIGFnYWluc3RcbiAgYSByZWdleCBwYXR0ZXJuIGFuZCBjaGVja3MgdGhhdCBpdCBpcyBub3QgZW1wdHkuICovXG4gIGNvbnN0IHNlYXJjaFF1ZXJ5SXNWYWxpZCA9IHZhbGlkYXRlU2VhcmNoUXVlcnkobG9jYXRpb24pO1xuICBpZiAoIXNlYXJjaFF1ZXJ5SXNWYWxpZCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgc2VhcmNoIHF1ZXJ5Jyk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJBUEl1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdMb2NhdGlvbiBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEFQSSBjYWxsIGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yIGZldGNoaW5nIHRoZSAke2VuZHBvaW50fSBBUEkgZm9yIGxvY2F0aW9uICR7bG9jYXRpb259OiBgLFxuICAgICAgZXJyLFxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udmVyc2lvblN0YXRlKCkge1xuICBsZXQgdW5pdDtcblxuICBmdW5jdGlvbiBzZXRDb252ZXJzaW9uU3RhdGUobmV3VW5pdCkge1xuICAgIHVuaXQgPSBuZXdVbml0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udmVyc2lvblN0YXRlKCkge1xuICAgIHJldHVybiB1bml0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRDb252ZXJzaW9uU3RhdGUsXG4gICAgZ2V0Q29udmVyc2lvblN0YXRlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0LCBwcm9wZXJ0eSkge1xuICBsZXQgd2VhdGhlckRhdGE7XG4gIGxldCBlbmRwb2ludDtcbiAgbGV0IGV4Y2x1ZGU7XG4gIGxldCBwcmVjaXBpdGF0aW9uO1xuICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgY2FzZSAnc3RhdHVzJzpcbiAgICBjYXNlICdjdXJyZW50VGVtcCc6XG4gICAgY2FzZSAnZmVlbHNMaWtlJzpcbiAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgY2FzZSAnd2luZFNwZWVkJzpcbiAgICAgIGVuZHBvaW50ID0gJ3dlYXRoZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlY2lwaXRhdGlvbic6XG4gICAgICBlbmRwb2ludCA9ICdmb3JlY2FzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkYWlseSc6XG4gICAgICBlbmRwb2ludCA9ICdvbmVjYWxsJztcbiAgICAgIGV4Y2x1ZGUgPSAnY3VycmVudCxtaW51dGVseSxob3VybHksYWxlcnRzJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCJgKTtcbiAgfVxuICB0cnkge1xuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiwgZXhjbHVkZSwgdW5pdCwgZW5kcG9pbnQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yIGZldGNoaW5nICR7ZW5kcG9pbnR9IEFQSSBmb3IgbG9jYXRpb24gXCIke2xvY2F0aW9ufVwiOiBgLFxuICAgICAgZXJyLFxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgY2FzZSAnY3VycmVudFRlbXAnOlxuICAgICAgcmV0dXJuIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgICBjYXNlICdmZWVsc0xpa2UnOlxuICAgICAgcmV0dXJuIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBjYXNlICd3aW5kU3BlZWQnOlxuICAgICAgcmV0dXJuIE1hdGgucm91bmQod2VhdGhlckRhdGEud2luZC5zcGVlZCk7XG4gICAgY2FzZSAncHJlY2lwaXRhdGlvbic6XG4gICAgICBwcmVjaXBpdGF0aW9uID0gd2VhdGhlckRhdGEubGlzdFswXS5wb3A7XG4gICAgICBpZiAocHJlY2lwaXRhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFByZWNpcGl0YXRpb24gPSBwYXJzZUZsb2F0KHByZWNpcGl0YXRpb24pLnRvRml4ZWQoMik7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFByZWNpcGl0YXRpb24gPSBwYXJzZWRQcmVjaXBpdGF0aW9uICogMTAwO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChmb3JtYXR0ZWRQcmVjaXBpdGF0aW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0NvdWxkIG5vdCByZXRyaWV2ZSBmb3JlY2FzdGVkIHByZWNpcGl0YXRpb24nKTtcbiAgICBjYXNlICdkYWlseSc6IHtcbiAgICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IHdlYXRoZXJEYXRhLmRhaWx5LnNsaWNlKDEsIDgpLm1hcCgoZGF5KSA9PiAoe1xuICAgICAgICBkYXk6IG5ldyBEYXRlKGRheS5kdCAqIDEwMDApLmdldERheSgpLFxuICAgICAgICBzdGF0dXM6IGRheS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgIG1pbjogTWF0aC5yb3VuZChkYXkudGVtcC5taW4pLFxuICAgICAgICBtYXg6IE1hdGgucm91bmQoZGF5LnRlbXAubWF4KSxcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBmb3JlY2FzdERhdGE7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCJgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25OYW1lRnJvbUpTT04obG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiwgbnVsbCwgJ3dlYXRoZXInKTtcbiAgcmV0dXJuIGxvY2F0aW9uRGF0YS5uYW1lO1xufVxuIiwiY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQgPSAoKSA9PiBzZWFyY2hCYXIudmFsdWUgfHwgJ01pbm5lYXBvbGlzJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2VhcmNoUXVlcnkgPSAoc2VhcmNoUXVlcnkpID0+IHtcbiAgY29uc3Qgc2VhcmNoUmVnZXggPVxuICAgIC9eKFthLXpBLVpcXGRcXHMrXSopKCxcXHMqKFthLXpBLVpdezJ9KT8pPygsXFxzKyhbYS16QS1aXXsyfSk/KT8kLztcbiAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCB8fCBzZWFyY2hSZWdleC50ZXN0KHNlYXJjaFF1ZXJ5KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvblN0YXRlKCkge1xuICBsZXQgbG9jYXRpb24gPSAnTWlubmVhcG9saXMnO1xuXG4gIGZ1bmN0aW9uIHNldExvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0TG9jYXRpb24sXG4gICAgZ2V0TG9jYXRpb24sXG4gIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9