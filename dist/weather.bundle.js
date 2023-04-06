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
    }&lon=${coords.lon}&exclude=${exclude}&appid=${getAPIkey()}`;
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
    case 'daily':
      return weatherData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDs7QUFFdEQ7O0FBRUE7QUFDQSwwRUFBMEUsU0FBUyxpQkFBaUIsWUFBWTtBQUNoSDtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZLE1BQU07QUFDbEIsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLFdBQVcsV0FBVyxRQUFRLFNBQVMsWUFBWTtBQUMvRCxJQUFJO0FBQ0osK0RBQStELFNBQVMsS0FBSyxTQUFTLFVBQVUsS0FBSyxTQUFTLFlBQVk7QUFDMUg7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtFQUFtQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGdCQUFnQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw0QkFBNEIsVUFBVSxtQkFBbUIsU0FBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHdCQUF3QixVQUFVLG9CQUFvQixTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeklBOztBQUVPOztBQUVBO0FBQ1A7QUFDQSxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRTtBQUM1RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvYXBpL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsaWRhdGVTZWFyY2hRdWVyeSB9IGZyb20gJy4uL3NlYXJjaC1xdWVyeSc7XG5cbmNvbnN0IGdldEFQSWtleSA9ICgpID0+ICczNTM1YzhkMzEyMzNkOThiN2Y4MGMyNmI1Yjc2ZTNhNic7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uQ29vcmRzKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHdlYXRoZXJBUEl1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZsaW1pdD0xJmFwcGlkPSR7Z2V0QVBJa2V5KCl9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJBUEl1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0ZSA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEdlb2NvZGUgQVBJIGNhbGwgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWAsXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB7IGxhdCB9ID0gd2VhdGhlckRhdGFbMF07XG4gICAgY29uc3QgeyBsb24gfSA9IHdlYXRoZXJEYXRhWzBdO1xuICAgIHJldHVybiB7IGxhdCwgbG9uIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgZmV0Y2hpbmcgdGhlIGdlb2NvZGluZyBBUEkgZm9yIGxvY2F0aW9uICR7bG9jYXRpb259YCxcbiAgICAgIGVycixcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoXG4gIGxvY2F0aW9uLFxuICBleGNsdWRlLFxuICB1bml0ID0gJ2ltcGVyaWFsJyxcbiAgZW5kcG9pbnQgPSAnd2VhdGhlcicsXG4pIHtcbiAgbGV0IHdlYXRoZXJBUEl1cmw7XG4gIC8qXG5cdElmIHRoZSAnZXhjbHVkZScgcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB1c2UgdGhlIE9uZSBDYWxsXG5cdEFQSSBlbmRwb2ludCwgd2hpY2ggcmVxdWlyZXMgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZVxuXHRjb29yZGluYXRlcy4gUmV0cmlldmUgdGhlIGNvb3JkaW5hdGVzIHVzaW5nIHRoZSBsb2NhdGlvblxuXHRwYXJhbWV0ZXIgYW5kIHBsdWcgdGhlbSBpbnRvIHRoZSBVUkwuIEZvciBvdGhlciBlbmRwb2ludHMsIFxuXHR1c2UgdGhlIGxvY2F0aW9uIHBhcmFtZXRlciBkaXJlY3RseS5cblx0Ki9cbiAgaWYgKGV4Y2x1ZGUpIHtcbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRMb2NhdGlvbkNvb3Jkcyhsb2NhdGlvbik7XG4gICAgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtcbiAgICAgIGNvb3Jkcy5sYXRcbiAgICB9Jmxvbj0ke2Nvb3Jkcy5sb259JmV4Y2x1ZGU9JHtleGNsdWRlfSZhcHBpZD0ke2dldEFQSWtleSgpfWA7XG4gIH0gZWxzZSB7XG4gICAgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvJHtlbmRwb2ludH0/cT0ke2xvY2F0aW9ufSYmdW5pdHM9JHt1bml0fSZhcHBpZD0ke2dldEFQSWtleSgpfWA7XG4gIH1cbiAgLy8gVGhlIGZ1bmN0aW9uIHZhbGlkYXRlU2VhcmNoUXVlcnkgdmFsaWRhdGVzIGEgc3RyaW5nIGFnYWluc3Rcblx0Ly8gYSByZWdleCBwYXR0ZXJuIGFuZCBjaGVja3MgdGhhdCBpdCBpcyBub3QgZW1wdHkuXG4gIGNvbnN0IHNlYXJjaFF1ZXJ5SXNWYWxpZCA9IHZhbGlkYXRlU2VhcmNoUXVlcnkobG9jYXRpb24pO1xuICBpZiAoIXNlYXJjaFF1ZXJ5SXNWYWxpZCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgc2VhcmNoIHF1ZXJ5Jyk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJBUEl1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdMb2NhdGlvbiBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEFQSSBjYWxsIGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yIGZldGNoaW5nIHRoZSAke2VuZHBvaW50fSBBUEkgZm9yIGxvY2F0aW9uICR7bG9jYXRpb259OiBgLFxuICAgICAgZXJyLFxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0LCBwcm9wZXJ0eSkge1xuICBsZXQgd2VhdGhlckRhdGE7XG4gIGxldCBlbmRwb2ludDtcbiAgbGV0IGV4Y2x1ZGU7XG4gIGxldCBwcmVjaXBpdGF0aW9uO1xuICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgY2FzZSAnc3RhdHVzJzpcbiAgICBjYXNlICdjdXJyZW50VGVtcCc6XG4gICAgY2FzZSAnZmVlbHNMaWtlJzpcbiAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgY2FzZSAnd2luZFNwZWVkJzpcbiAgICAgIGVuZHBvaW50ID0gJ3dlYXRoZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlY2lwaXRhdGlvbic6XG4gICAgICBlbmRwb2ludCA9ICdmb3JlY2FzdCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkYWlseSc6XG4gICAgICBlbmRwb2ludCA9ICdvbmVjYWxsJztcbiAgICAgIGV4Y2x1ZGUgPSAnY3VycmVudCxtaW51dGVseSxob3VybHksYWxlcnRzJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCJgKTtcbiAgfVxuICB0cnkge1xuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiwgZXhjbHVkZSwgdW5pdCwgZW5kcG9pbnQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yIGZldGNoaW5nICR7ZW5kcG9pbnR9IEFQSSBmb3IgbG9jYXRpb24gXCIke2xvY2F0aW9ufVwiOiBgLFxuICAgICAgZXJyLFxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgY2FzZSAnY3VycmVudFRlbXAnOlxuICAgICAgcmV0dXJuIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgICBjYXNlICdmZWVsc0xpa2UnOlxuICAgICAgcmV0dXJuIE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBjYXNlICd3aW5kU3BlZWQnOlxuICAgICAgcmV0dXJuIE1hdGgucm91bmQod2VhdGhlckRhdGEud2luZC5zcGVlZCk7XG4gICAgY2FzZSAncHJlY2lwaXRhdGlvbic6XG4gICAgICBwcmVjaXBpdGF0aW9uID0gd2VhdGhlckRhdGEubGlzdFswXS5wb3A7XG4gICAgICBpZiAocHJlY2lwaXRhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFByZWNpcGl0YXRpb24gPSBwYXJzZUZsb2F0KHByZWNpcGl0YXRpb24pLnRvRml4ZWQoMik7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFByZWNpcGl0YXRpb24gPSBwYXJzZWRQcmVjaXBpdGF0aW9uICogMTAwO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChmb3JtYXR0ZWRQcmVjaXBpdGF0aW9uKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0NvdWxkIG5vdCByZXRyaWV2ZSBmb3JlY2FzdGVkIHByZWNpcGl0YXRpb24nKTtcbiAgICBjYXNlICdkYWlseSc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cImApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbk5hbWVGcm9tSlNPTihsb2NhdGlvbikge1xuICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uLCBudWxsLCAnd2VhdGhlcicpO1xuICByZXR1cm4gbG9jYXRpb25EYXRhLm5hbWU7XG59XG4iLCJjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcblxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uRnJvbVVzZXJJbnB1dCA9ICgpID0+IHNlYXJjaEJhci52YWx1ZSB8fCAnTWlubmVhcG9saXMnO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVTZWFyY2hRdWVyeSA9IChzZWFyY2hRdWVyeSkgPT4ge1xuICBjb25zdCBzZWFyY2hSZWdleCA9XG4gICAgL14oW2EtekEtWlxcZFxccytdKikoLFxccyooW2EtekEtWl17Mn0pPyk/KCxcXHMrKFthLXpBLVpdezJ9KT8pPyQvO1xuICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwIHx8IHNlYXJjaFJlZ2V4LnRlc3Qoc2VhcmNoUXVlcnkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==