"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["src_components_api_weather-data_js"],{

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


const weatherAPIkey = '3535c8d31233d98b7f80c26b5b76e3a6';

async function fetchWeatherData(
  location,
  unit = 'imperial',
  endpoint = 'weather'
) {
  const weatherAPIurl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${location}&&units=${unit}&APPID=${weatherAPIkey}`;
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
      err
    );
    return err;
  }
}

async function extractWeatherData(location, unit, property) {
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
      return Math.round(weatherData.main.temp);
    case 'feelsLike':
      return Math.round(weatherData.main.feels_like);
    case 'humidity':
      return weatherData.main.humidity;
    case 'windSpeed':
      return Math.round(weatherData.wind.speed);
    case 'precipitation':
      precipitation = weatherData.list[0].pop;
			console.log(precipitation);
      if (precipitation !== undefined) {
        const parsedPrecipitation = parseFloat(precipitation).toFixed(2);
        console.log(parsedPrecipitation);
        const formattedPrecipitation = parsedPrecipitation * 100;
        console.log(weatherData);
        console.log(formattedPrecipitation);
        return Math.round(formattedPrecipitation);
      }
      return new Error('Could not retrieve forecasted precipitation');
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYXBpX3dlYXRoZXItZGF0YV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDs7QUFFdEQ7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxTQUFTLEtBQUssU0FBUyxVQUFVLEtBQUssU0FBUyxjQUFjO0FBQ2hJLDZCQUE2QixrRUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNEJBQTRCLFVBQVUsbUJBQW1CLFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHdCQUF3QixVQUFVLG9CQUFvQixTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTs7QUFFTzs7QUFFQTtBQUNQO0FBQ0EscUNBQXFDLEVBQUUsbUJBQW1CLEVBQUU7QUFDNUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL2FwaS93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXF1ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9zZWFyY2gtcXVlcnknO1xuXG5jb25zdCB3ZWF0aGVyQVBJa2V5ID0gJzM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoXG4gIGxvY2F0aW9uLFxuICB1bml0ID0gJ2ltcGVyaWFsJyxcbiAgZW5kcG9pbnQgPSAnd2VhdGhlcidcbikge1xuICBjb25zdCB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8ke2VuZHBvaW50fT9xPSR7bG9jYXRpb259JiZ1bml0cz0ke3VuaXR9JkFQUElEPSR7d2VhdGhlckFQSWtleX1gO1xuICBjb25zdCBzZWFyY2hRdWVyeUlzVmFsaWQgPSB2YWxpZGF0ZVNlYXJjaFF1ZXJ5KGxvY2F0aW9uKTtcbiAgaWYgKCFzZWFyY2hRdWVyeUlzVmFsaWQpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHNlYXJjaCBxdWVyeScpO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQVBJdXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTG9jYXRpb24gbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBBUEkgY2FsbCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyB0aGUgJHtlbmRwb2ludH0gQVBJIGZvciBsb2NhdGlvbiAke2xvY2F0aW9ufTogYCxcbiAgICAgIGVyclxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0LCBwcm9wZXJ0eSkge1xuICBsZXQgd2VhdGhlckRhdGE7XG4gIGxldCBlbmRwb2ludDtcbiAgbGV0IHByZWNpcGl0YXRpb247XG4gIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICBjYXNlICdzdGF0dXMnOlxuICAgIGNhc2UgJ2N1cnJlbnRUZW1wJzpcbiAgICBjYXNlICdmZWVsc0xpa2UnOlxuICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICBjYXNlICd3aW5kU3BlZWQnOlxuICAgICAgZW5kcG9pbnQgPSAnd2VhdGhlcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVjaXBpdGF0aW9uJzpcbiAgICAgIGVuZHBvaW50ID0gJ2ZvcmVjYXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCJgKTtcbiAgfVxuICB0cnkge1xuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCwgZW5kcG9pbnQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yIGZldGNoaW5nICR7ZW5kcG9pbnR9IEFQSSBmb3IgbG9jYXRpb24gXCIke2xvY2F0aW9ufVwiOiBgLFxuICAgICAgZXJyXG4gICAgKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG4gIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICBjYXNlICdzdGF0dXMnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjYXNlICdjdXJyZW50VGVtcCc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApO1xuICAgIGNhc2UgJ2ZlZWxzTGlrZSc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIGNhc2UgJ3dpbmRTcGVlZCc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS53aW5kLnNwZWVkKTtcbiAgICBjYXNlICdwcmVjaXBpdGF0aW9uJzpcbiAgICAgIHByZWNpcGl0YXRpb24gPSB3ZWF0aGVyRGF0YS5saXN0WzBdLnBvcDtcblx0XHRcdGNvbnNvbGUubG9nKHByZWNpcGl0YXRpb24pO1xuICAgICAgaWYgKHByZWNpcGl0YXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBwYXJzZWRQcmVjaXBpdGF0aW9uID0gcGFyc2VGbG9hdChwcmVjaXBpdGF0aW9uKS50b0ZpeGVkKDIpO1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWRQcmVjaXBpdGF0aW9uKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJlY2lwaXRhdGlvbiA9IHBhcnNlZFByZWNpcGl0YXRpb24gKiAxMDA7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybWF0dGVkUHJlY2lwaXRhdGlvbik7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGZvcm1hdHRlZFByZWNpcGl0YXRpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQ291bGQgbm90IHJldHJpZXZlIGZvcmVjYXN0ZWQgcHJlY2lwaXRhdGlvbicpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCJgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25OYW1lRnJvbUpTT04obG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiwgbnVsbCwgJ3dlYXRoZXInKTtcbiAgcmV0dXJuIGxvY2F0aW9uRGF0YS5uYW1lO1xufVxuIiwiY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQgPSAoKSA9PiBzZWFyY2hCYXIudmFsdWUgfHwgJ01pbm5lYXBvbGlzJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2VhcmNoUXVlcnkgPSAoc2VhcmNoUXVlcnkpID0+IHtcbiAgY29uc3Qgc2VhcmNoUmVnZXggPVxuICAgIC9eKFthLXpBLVpcXGRcXHMrXSopKCxcXHMqKFthLXpBLVpdezJ9KT8pPygsXFxzKyhbYS16QS1aXXsyfSk/KT8kLztcbiAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCB8fCBzZWFyY2hSZWdleC50ZXN0KHNlYXJjaFF1ZXJ5KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=