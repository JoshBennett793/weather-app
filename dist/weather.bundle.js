"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["weather"],{

/***/ "./src/components/api/weather-data.js":
/*!********************************************!*\
  !*** ./src/components/api/weather-data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractWeatherData": () => (/* binding */ extractWeatherData),
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData),
/* harmony export */   "getLocationNameFromJSON": () => (/* binding */ getLocationNameFromJSON)
/* harmony export */ });
/* harmony import */ var _search_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-query */ "./src/components/search-query.js");


const getAPIkey = () => '3535c8d31233d98b7f80c26b5b76e3a6';

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
  /*
	If the 'exclude' parameter is provided, use the One Call
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
  // The function validateSearchQuery validates a string against
  // a regex pattern and checks that it is not empty.
  const searchQueryIsValid = (0,_search_query__WEBPACK_IMPORTED_MODULE_0__.validateSearchQuery)(location);
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

/***/ "./src/components/search-query.js":
/*!****************************************!*\
  !*** ./src/components/search-query.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/api/weather-data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQSwwRUFBMEUsU0FBUyxpQkFBaUIsWUFBWTtBQUNoSDtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZLE1BQU07QUFDbEIsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLFdBQVcsVUFBVSxLQUFLLFdBQVcsUUFBUSxTQUFTLFlBQVk7QUFDOUUsSUFBSTtBQUNKLCtEQUErRCxTQUFTLEtBQUssU0FBUyxVQUFVLEtBQUssU0FBUyxZQUFZO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrRUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNEJBQTRCLFVBQVUsbUJBQW1CLFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx3QkFBd0IsVUFBVSxvQkFBb0IsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSkE7O0FBRU87O0FBRUE7QUFDUDtBQUNBLHFDQUFxQyxFQUFFLG1CQUFtQixFQUFFO0FBQzVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9hcGkvd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi4vc2VhcmNoLXF1ZXJ5JztcblxuY29uc3QgZ2V0QVBJa2V5ID0gKCkgPT4gJzM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2JztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25Db29yZHMobG9jYXRpb24pIHtcbiAgY29uc3Qgd2VhdGhlckFQSXVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTEmYXBwaWQ9JHtnZXRBUElrZXkoKX1gO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXRlID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTG9jYXRpb24gbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgR2VvY29kZSBBUEkgY2FsbCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHsgbGF0IH0gPSB3ZWF0aGVyRGF0YVswXTtcbiAgICBjb25zdCB7IGxvbiB9ID0gd2VhdGhlckRhdGFbMF07XG4gICAgcmV0dXJuIHsgbGF0LCBsb24gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyB0aGUgZ2VvY29kaW5nIEFQSSBmb3IgbG9jYXRpb24gJHtsb2NhdGlvbn1gLFxuICAgICAgZXJyLFxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShcbiAgbG9jYXRpb24sXG4gIGV4Y2x1ZGUsXG4gIHVuaXQgPSAnaW1wZXJpYWwnLFxuICBlbmRwb2ludCA9ICd3ZWF0aGVyJyxcbikge1xuICBsZXQgd2VhdGhlckFQSXVybDtcbiAgLypcblx0SWYgdGhlICdleGNsdWRlJyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHVzZSB0aGUgT25lIENhbGxcblx0QVBJIGVuZHBvaW50LCB3aGljaCByZXF1aXJlcyBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXG5cdGNvb3JkaW5hdGVzLiBSZXRyaWV2ZSB0aGUgY29vcmRpbmF0ZXMgdXNpbmcgdGhlIGxvY2F0aW9uXG5cdHBhcmFtZXRlciBhbmQgcGx1ZyB0aGVtIGludG8gdGhlIFVSTC4gRm9yIG90aGVyIGVuZHBvaW50cywgXG5cdHVzZSB0aGUgbG9jYXRpb24gcGFyYW1ldGVyIGRpcmVjdGx5LlxuXHQqL1xuICBpZiAoZXhjbHVkZSkge1xuICAgIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGdldExvY2F0aW9uQ29vcmRzKGxvY2F0aW9uKTtcbiAgICB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke1xuICAgICAgY29vcmRzLmxhdFxuICAgIH0mbG9uPSR7Y29vcmRzLmxvbn0mJnVuaXRzPSR7dW5pdH0mZXhjbHVkZT0ke2V4Y2x1ZGV9JmFwcGlkPSR7Z2V0QVBJa2V5KCl9YDtcbiAgfSBlbHNlIHtcbiAgICB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8ke2VuZHBvaW50fT9xPSR7bG9jYXRpb259JiZ1bml0cz0ke3VuaXR9JmFwcGlkPSR7Z2V0QVBJa2V5KCl9YDtcbiAgfVxuICAvLyBUaGUgZnVuY3Rpb24gdmFsaWRhdGVTZWFyY2hRdWVyeSB2YWxpZGF0ZXMgYSBzdHJpbmcgYWdhaW5zdFxuICAvLyBhIHJlZ2V4IHBhdHRlcm4gYW5kIGNoZWNrcyB0aGF0IGl0IGlzIG5vdCBlbXB0eS5cbiAgY29uc3Qgc2VhcmNoUXVlcnlJc1ZhbGlkID0gdmFsaWRhdGVTZWFyY2hRdWVyeShsb2NhdGlvbik7XG4gIGlmICghc2VhcmNoUXVlcnlJc1ZhbGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBzZWFyY2ggcXVlcnknKTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgQVBJIGNhbGwgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgZmV0Y2hpbmcgdGhlICR7ZW5kcG9pbnR9IEFQSSBmb3IgbG9jYXRpb24gJHtsb2NhdGlvbn06IGAsXG4gICAgICBlcnIsXG4gICAgKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRyYWN0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQsIHByb3BlcnR5KSB7XG4gIGxldCB3ZWF0aGVyRGF0YTtcbiAgbGV0IGVuZHBvaW50O1xuICBsZXQgZXhjbHVkZTtcbiAgbGV0IHByZWNpcGl0YXRpb247XG4gIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICBjYXNlICdzdGF0dXMnOlxuICAgIGNhc2UgJ2N1cnJlbnRUZW1wJzpcbiAgICBjYXNlICdmZWVsc0xpa2UnOlxuICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICBjYXNlICd3aW5kU3BlZWQnOlxuICAgICAgZW5kcG9pbnQgPSAnd2VhdGhlcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVjaXBpdGF0aW9uJzpcbiAgICAgIGVuZHBvaW50ID0gJ2ZvcmVjYXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RhaWx5JzpcbiAgICAgIGVuZHBvaW50ID0gJ29uZWNhbGwnO1xuICAgICAgZXhjbHVkZSA9ICdjdXJyZW50LG1pbnV0ZWx5LGhvdXJseSxhbGVydHMnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cImApO1xuICB9XG4gIHRyeSB7XG4gICAgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uLCBleGNsdWRlLCB1bml0LCBlbmRwb2ludCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgZmV0Y2hpbmcgJHtlbmRwb2ludH0gQVBJIGZvciBsb2NhdGlvbiBcIiR7bG9jYXRpb259XCI6IGAsXG4gICAgICBlcnIsXG4gICAgKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG4gIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICBjYXNlICdzdGF0dXMnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjYXNlICdjdXJyZW50VGVtcCc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApO1xuICAgIGNhc2UgJ2ZlZWxzTGlrZSc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIGNhc2UgJ3dpbmRTcGVlZCc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS53aW5kLnNwZWVkKTtcbiAgICBjYXNlICdwcmVjaXBpdGF0aW9uJzpcbiAgICAgIHByZWNpcGl0YXRpb24gPSB3ZWF0aGVyRGF0YS5saXN0WzBdLnBvcDtcbiAgICAgIGlmIChwcmVjaXBpdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkUHJlY2lwaXRhdGlvbiA9IHBhcnNlRmxvYXQocHJlY2lwaXRhdGlvbikudG9GaXhlZCgyKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJlY2lwaXRhdGlvbiA9IHBhcnNlZFByZWNpcGl0YXRpb24gKiAxMDA7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGZvcm1hdHRlZFByZWNpcGl0YXRpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQ291bGQgbm90IHJldHJpZXZlIGZvcmVjYXN0ZWQgcHJlY2lwaXRhdGlvbicpO1xuICAgIGNhc2UgJ2RhaWx5Jzoge1xuICAgICAgY29uc3QgZm9yZWNhc3REYXRhID0gd2VhdGhlckRhdGEuZGFpbHkuc2xpY2UoMSwgOCkubWFwKChkYXkpID0+ICh7XG4gICAgICAgIGRheTogbmV3IERhdGUoZGF5LmR0ICogMTAwMCkuZ2V0RGF5KCksXG4gICAgICAgIHN0YXR1czogZGF5LndlYXRoZXJbMF0ubWFpbixcbiAgICAgICAgbWluOiBNYXRoLnJvdW5kKGRheS50ZW1wLm1pbiksXG4gICAgICAgIG1heDogTWF0aC5yb3VuZChkYXkudGVtcC5tYXgpLFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIGZvcmVjYXN0RGF0YTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cImApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbk5hbWVGcm9tSlNPTihsb2NhdGlvbikge1xuICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uLCBudWxsLCAnd2VhdGhlcicpO1xuICByZXR1cm4gbG9jYXRpb25EYXRhLm5hbWU7XG59XG4iLCJjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcblxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uRnJvbVVzZXJJbnB1dCA9ICgpID0+IHNlYXJjaEJhci52YWx1ZSB8fCAnTWlubmVhcG9saXMnO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVTZWFyY2hRdWVyeSA9IChzZWFyY2hRdWVyeSkgPT4ge1xuICBjb25zdCBzZWFyY2hSZWdleCA9XG4gICAgL14oW2EtekEtWlxcZFxccytdKikoLFxccyooW2EtekEtWl17Mn0pPyk/KCxcXHMrKFthLXpBLVpdezJ9KT8pPyQvO1xuICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwIHx8IHNlYXJjaFJlZ2V4LnRlc3Qoc2VhcmNoUXVlcnkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==