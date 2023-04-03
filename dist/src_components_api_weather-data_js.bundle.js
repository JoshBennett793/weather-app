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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfYXBpX3dlYXRoZXItZGF0YV9qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDs7QUFFdEQ7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxTQUFTLEtBQUssU0FBUyxVQUFVLEtBQUssU0FBUyxjQUFjO0FBQ2hJLDZCQUE2QixrRUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNEJBQTRCLFVBQVUsbUJBQW1CLFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHdCQUF3QixVQUFVLG9CQUFvQixTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7O0FBRU87O0FBRUE7QUFDUDtBQUNBLHFDQUFxQyxFQUFFLG1CQUFtQixFQUFFO0FBQzVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9hcGkvd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi4vc2VhcmNoLXF1ZXJ5JztcblxuY29uc3Qgd2VhdGhlckFQSWtleSA9ICczNTM1YzhkMzEyMzNkOThiN2Y4MGMyNmI1Yjc2ZTNhNic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKFxuICBsb2NhdGlvbixcbiAgdW5pdCA9ICdpbXBlcmlhbCcsXG4gIGVuZHBvaW50ID0gJ3dlYXRoZXInXG4pIHtcbiAgY29uc3Qgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvJHtlbmRwb2ludH0/cT0ke2xvY2F0aW9ufSYmdW5pdHM9JHt1bml0fSZBUFBJRD0ke3dlYXRoZXJBUElrZXl9YDtcbiAgY29uc3Qgc2VhcmNoUXVlcnlJc1ZhbGlkID0gdmFsaWRhdGVTZWFyY2hRdWVyeShsb2NhdGlvbik7XG4gIGlmICghc2VhcmNoUXVlcnlJc1ZhbGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBzZWFyY2ggcXVlcnknKTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgQVBJIGNhbGwgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgZmV0Y2hpbmcgdGhlICR7ZW5kcG9pbnR9IEFQSSBmb3IgbG9jYXRpb24gJHtsb2NhdGlvbn06IGAsXG4gICAgICBlcnJcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCwgcHJvcGVydHkpIHtcbiAgbGV0IHdlYXRoZXJEYXRhO1xuICBsZXQgZW5kcG9pbnQ7XG4gIGxldCBwcmVjaXBpdGF0aW9uO1xuICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgY2FzZSAnc3RhdHVzJzpcbiAgICBjYXNlICdjdXJyZW50VGVtcCc6XG4gICAgY2FzZSAnZmVlbHNMaWtlJzpcbiAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgY2FzZSAnd2luZFNwZWVkJzpcbiAgICAgIGVuZHBvaW50ID0gJ3dlYXRoZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlY2lwaXRhdGlvbic6XG4gICAgICBlbmRwb2ludCA9ICdmb3JlY2FzdCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiYCk7XG4gIH1cbiAgdHJ5IHtcbiAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQsIGVuZHBvaW50KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyAke2VuZHBvaW50fSBBUEkgZm9yIGxvY2F0aW9uIFwiJHtsb2NhdGlvbn1cIjogYCxcbiAgICAgIGVyclxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgY2FzZSAnY3VycmVudFRlbXAnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLm1haW4udGVtcDtcbiAgICBjYXNlICdmZWVsc0xpa2UnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBjYXNlICd3aW5kU3BlZWQnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLndpbmQuc3BlZWQ7XG4gICAgY2FzZSAncHJlY2lwaXRhdGlvbic6XG4gICAgICBwcmVjaXBpdGF0aW9uID0gd2VhdGhlckRhdGEubGlzdFswXS5wb3A7XG4gICAgICBpZiAocHJlY2lwaXRhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFByZWNpcGl0YXRpb24gPSBwYXJzZUZsb2F0KHByZWNpcGl0YXRpb24pLnRvRml4ZWQoMSk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFByZWNpcGl0YXRpb24gPSBwYXJzZWRQcmVjaXBpdGF0aW9uICogMTAwO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkUHJlY2lwaXRhdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0NvdWxkIG5vdCByZXRyaWV2ZSBmb3JlY2FzdGVkIHByZWNpcGl0YXRpb24nKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiYCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uTmFtZUZyb21KU09OKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIG51bGwsICd3ZWF0aGVyJyk7XG4gIHJldHVybiBsb2NhdGlvbkRhdGEubmFtZTtcbn1cbiIsImNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0ID0gKCkgPT4gc2VhcmNoQmFyLnZhbHVlIHx8ICdNaW5uZWFwb2xpcyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNlYXJjaFF1ZXJ5ID0gKHNlYXJjaFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFJlZ2V4ID1cbiAgICAvXihbYS16QS1aXFxkXFxzK10qKSgsXFxzKihbYS16QS1aXXsyfSk/KT8oLFxccysoW2EtekEtWl17Mn0pPyk/JC87XG4gIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgfHwgc2VhcmNoUmVnZXgudGVzdChzZWFyY2hRdWVyeSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9