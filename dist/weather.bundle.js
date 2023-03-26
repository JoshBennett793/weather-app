"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["weather"],{

/***/ "./src/components/api/weather-data.js":
/*!********************************************!*\
  !*** ./src/components/api/weather-data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractCurrentTemps": () => (/* binding */ extractCurrentTemps),
/* harmony export */   "extractHumidity": () => (/* binding */ extractHumidity),
/* harmony export */   "extractPrecipitation": () => (/* binding */ extractPrecipitation),
/* harmony export */   "extractWindSpeed": () => (/* binding */ extractWindSpeed),
/* harmony export */   "getLocationNameFromJSON": () => (/* binding */ getLocationNameFromJSON)
/* harmony export */ });
async function fetchCurrentWeather(location, unit) {
  const weatherAPIurl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&&units=${unit}&APPID=3535c8d31233d98b7f80c26b5b76e3a6`;
  try {
    const response = await fetch(weatherAPIurl, { mode: 'cors' });
    return response;
  } catch (err) {
    console.error('There was an error fetching the current weather API: ', err);
  }
}

async function fetchForecastWeather(location, unit) {
  const weatherAPIurl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&&units=${unit}&APPID=3535c8d31233d98b7f80c26b5b76e3a6`;
  try {
    const response = await fetch(weatherAPIurl, { mode: 'cors' });
    return response;
  } catch (err) {
    console.error(
      'There was an error fetching the forecast weather API: ',
      err
    );
  }
}

async function processCurrentWeatherJSON(location, unit) {
  try {
    const response = await fetchCurrentWeather(
      location || 'Minneapolis',
      unit || 'imperial'
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(
      'There was an error processing the fetched current weather API into JSON: ',
      err
    );
  }
}

async function processForecastWeatherJSON(location, unit) {
  try {
    const response = await fetchForecastWeather(location, unit);
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(
      'There was an error processing the fetched current weather API into JSON: ',
      err
    );
  }
}

async function extractCurrentTemps(location, unit) {
  try {
    const weatherData = await processCurrentWeatherJSON(location, unit);
    const { temp, feels_like } = weatherData.main;
    return {
      temp,
      feels_like,
    };
  } catch (err) {
    console.error('There was an error retrieving current temp: ', err);
  }
}

async function extractHumidity(location, unit) {
  try {
    const weatherData = await processCurrentWeatherJSON(location, unit);
    const { humidity } = weatherData.main;
    return humidity;
  } catch (err) {
    console.error('There was an error retrieving current humidity: ', err);
  }
}

async function extractWindSpeed(location, unit) {
  try {
    const weatherData = await processCurrentWeatherJSON(location, unit);
    const { speed } = weatherData.wind;
    return speed;
  } catch (err) {
    console.error('There was an error retrieving current wind speed', err);
  }
}

async function extractPrecipitation(location, unit) {
  try {
    const forecastData = await processForecastWeatherJSON(location, unit);
    const precipitation = forecastData.list[0].pop;
    const parsedPrecipitation = parseFloat(precipitation).toFixed(1);
    const formattedPrecipitation = parsedPrecipitation * 100;
    return formattedPrecipitation;
  } catch (err) {
    console.error(
      'There was an error retrieving forecasted precipitation: ',
      err
    );
  }
}

async function getLocationNameFromJSON(location) {
  const locationData = await processCurrentWeatherJSON(location);
  return locationData.name;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/api/weather-data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLDZFQUE2RSxTQUFTLFVBQVUsS0FBSztBQUNyRztBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RSxTQUFTLFVBQVUsS0FBSztBQUN0RztBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL2FwaS93ZWF0aGVyLWRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZmV0Y2hDdXJyZW50V2VhdGhlcihsb2NhdGlvbiwgdW5pdCkge1xuICBjb25zdCB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mJnVuaXRzPSR7dW5pdH0mQVBQSUQ9MzUzNWM4ZDMxMjMzZDk4YjdmODBjMjZiNWI3NmUzYTZgO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIGN1cnJlbnQgd2VhdGhlciBBUEk6ICcsIGVycik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hGb3JlY2FzdFdlYXRoZXIobG9jYXRpb24sIHVuaXQpIHtcbiAgY29uc3Qgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSYmdW5pdHM9JHt1bml0fSZBUFBJRD0zNTM1YzhkMzEyMzNkOThiN2Y4MGMyNmI1Yjc2ZTNhNmA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQVBJdXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBmb3JlY2FzdCB3ZWF0aGVyIEFQSTogJyxcbiAgICAgIGVyclxuICAgICk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTihsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hDdXJyZW50V2VhdGhlcihcbiAgICAgIGxvY2F0aW9uIHx8ICdNaW5uZWFwb2xpcycsXG4gICAgICB1bml0IHx8ICdpbXBlcmlhbCdcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgcHJvY2Vzc2luZyB0aGUgZmV0Y2hlZCBjdXJyZW50IHdlYXRoZXIgQVBJIGludG8gSlNPTjogJyxcbiAgICAgIGVyclxuICAgICk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0ZvcmVjYXN0V2VhdGhlckpTT04obG9jYXRpb24sIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoRm9yZWNhc3RXZWF0aGVyKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgdGhlIGZldGNoZWQgY3VycmVudCB3ZWF0aGVyIEFQSSBpbnRvIEpTT046ICcsXG4gICAgICBlcnJcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRyYWN0Q3VycmVudFRlbXBzKGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCB7IHRlbXAsIGZlZWxzX2xpa2UgfSA9IHdlYXRoZXJEYXRhLm1haW47XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbXAsXG4gICAgICBmZWVsc19saWtlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGN1cnJlbnQgdGVtcDogJywgZXJyKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdEh1bWlkaXR5KGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCB7IGh1bWlkaXR5IH0gPSB3ZWF0aGVyRGF0YS5tYWluO1xuICAgIHJldHVybiBodW1pZGl0eTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgY3VycmVudCBodW1pZGl0eTogJywgZXJyKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFdpbmRTcGVlZChsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTihsb2NhdGlvbiwgdW5pdCk7XG4gICAgY29uc3QgeyBzcGVlZCB9ID0gd2VhdGhlckRhdGEud2luZDtcbiAgICByZXR1cm4gc3BlZWQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGN1cnJlbnQgd2luZCBzcGVlZCcsIGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RQcmVjaXBpdGF0aW9uKGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgcHJvY2Vzc0ZvcmVjYXN0V2VhdGhlckpTT04obG9jYXRpb24sIHVuaXQpO1xuICAgIGNvbnN0IHByZWNpcGl0YXRpb24gPSBmb3JlY2FzdERhdGEubGlzdFswXS5wb3A7XG4gICAgY29uc3QgcGFyc2VkUHJlY2lwaXRhdGlvbiA9IHBhcnNlRmxvYXQocHJlY2lwaXRhdGlvbikudG9GaXhlZCgxKTtcbiAgICBjb25zdCBmb3JtYXR0ZWRQcmVjaXBpdGF0aW9uID0gcGFyc2VkUHJlY2lwaXRhdGlvbiAqIDEwMDtcbiAgICByZXR1cm4gZm9ybWF0dGVkUHJlY2lwaXRhdGlvbjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBmb3JlY2FzdGVkIHByZWNpcGl0YXRpb246ICcsXG4gICAgICBlcnJcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbk5hbWVGcm9tSlNPTihsb2NhdGlvbikge1xuICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uKTtcbiAgcmV0dXJuIGxvY2F0aW9uRGF0YS5uYW1lO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9