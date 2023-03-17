"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["index"],{

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/intlFormat/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/intlFormat/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ intlFormat)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name intlFormat
 * @category Common Helpers
 * @summary  Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param {Date|Number} argument - the original date.
 * @param {Object} [formatOptions] - an object with options.
 * @param {'lookup'|'best fit'} [formatOptions.localeMatcher='best fit'] - locale selection algorithm.
 * @param {'narrow'|'short'|'long'} [formatOptions.weekday] - representation the days of the week.
 * @param {'narrow'|'short'|'long'} [formatOptions.era] - representation of eras.
 * @param {'numeric'|'2-digit'} [formatOptions.year] - representation of years.
 * @param {'numeric'|'2-digit'|'narrow'|'short'|'long'} [formatOptions.month='numeric'] - representation of month.
 * @param {'numeric'|'2-digit'} [formatOptions.day='numeric'] - representation of day.
 * @param {'numeric'|'2-digit'} [formatOptions.hour='numeric'] - representation of hours.
 * @param {'numeric'|'2-digit'} [formatOptions.minute] - representation of minutes.
 * @param {'numeric'|'2-digit'} [formatOptions.second] - representation of seconds.
 * @param {'short'|'long'} [formatOptions.timeZoneName] - representation of names of time zones.
 * @param {'basic'|'best fit'} [formatOptions.formatMatcher='best fit'] - format selection algorithm.
 * @param {Boolean} [formatOptions.hour12] - determines whether to use 12-hour time format.
 * @param {String} [formatOptions.timeZone] - the time zone to use.
 * @param {Object} [localeOptions] - an object with locale.
 * @param {String|String[]} [localeOptions.locale] - the locale code
 * @returns {String} the formatted date string.
 * @throws {TypeError} 1 argument required.
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      weekday: 'long',
 *      year: 'numeric',
 *      month: 'long',
 *      day: 'numeric',
 *    }, {
 *      locale: 'de-DE',
 *  })
 * //=> Freitag, 4. Oktober 2019
 *
 * @example
 * // Represent 10 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      year: 'numeric',
 *      month: 'numeric',
 *      day: 'numeric',
 *      hour: 'numeric',
 *  })
 * //=> 10/4/2019, 12 PM
 *
 * @example
 * // Represent 10 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      locale: 'ko-KR',
 *  })
 * //=> 2019. 10. 4.
 *
 * @example
 * // Represent 10 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */
function intlFormat(date, formatOrLocale, localeOptions) {
  var _localeOptions;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var formatOptions;

  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale;
  } else {
    localeOptions = formatOrLocale;
  }

  return new Intl.DateTimeFormat((_localeOptions = localeOptions) === null || _localeOptions === void 0 ? void 0 : _localeOptions.locale, formatOptions).format(date);
}

function isFormatOptions(opts) {
  return opts !== undefined && !('locale' in opts);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/weather-data.js");


async function writeLocalDateTime(location, unit) {
  const dateSpan = document.getElementById('date');
  const timeSpan = document.getElementById('time');

  const dateTimeData = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.extractLocationDateAndTime)(location, unit);
  const date = dateTimeData.formattedDate;
  const time = dateTimeData.formattedTime;

  dateSpan.textContent = date;
  timeSpan.textContent = time;
}

async function writeCurrentTemps(location, unit) {
  const currentTemps = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.extractCurrentTemps)(location, unit);
  const currentTemp = document.getElementById('current-temp');
  const highTemp = document.getElementById('high-temp');
  const lowTemp = document.getElementById('low-temp');
  const feelsLike = document.getElementById('feels-like');

  currentTemp.textContent = `Currently: ${currentTemps.temp}°`;
  highTemp.textContent = `H: ${currentTemps.temp_max}°`;
  lowTemp.textContent = `L: ${currentTemps.temp_min}°`;
  feelsLike.textContent = `Feels Like: ${currentTemps.feels_like}°`;
}

async function writeHumidity(location, unit) {
  const currentHumidity = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.extractHumidity)(location, unit);
  const humiditySpan = document.getElementById('humidity');

  humiditySpan.textContent = `Humidity: ${currentHumidity}%`;
}

async function writePrecipitation(location, unit) {
  const currentPrecipitation = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.extractPrecipitation)(location, unit);
  const precipitationSpan = document.getElementById('precipitation');

  precipitationSpan.textContent = `Precipitation: ${currentPrecipitation}%`;
}

async function writeWindSpeed(location, unit) {
  const currentWindSpeed = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.extractWindSpeed)(location, unit);
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


/***/ }),

/***/ "./src/weather-data.js":
/*!*****************************!*\
  !*** ./src/weather-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractCurrentTemps": () => (/* binding */ extractCurrentTemps),
/* harmony export */   "extractHumidity": () => (/* binding */ extractHumidity),
/* harmony export */   "extractLocationDateAndTime": () => (/* binding */ extractLocationDateAndTime),
/* harmony export */   "extractPrecipitation": () => (/* binding */ extractPrecipitation),
/* harmony export */   "extractWindSpeed": () => (/* binding */ extractWindSpeed)
/* harmony export */ });
/* harmony import */ var date_fns_intlFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/intlFormat */ "./node_modules/date-fns/esm/intlFormat/index.js");


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
    const response = await fetchCurrentWeather(location, unit);
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
    const { temp, temp_min, temp_max, feels_like } = weatherData.main;
    return {
      temp,
      temp_min,
      temp_max,
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

async function extractLocationDateAndTime(location, unit) {
  try {
    const locationData = await processCurrentWeatherJSON(location, unit);
    const date = new Date(locationData.dt * 1000);
    const formattedDate = (0,date_fns_intlFormat__WEBPACK_IMPORTED_MODULE_0__["default"])(date, {
      weekday: 'long',
      year: '2-digit',
      month: 'short',
      day: 'numeric',
    });
    const formattedTime = (0,date_fns_intlFormat__WEBPACK_IMPORTED_MODULE_0__["default"])(date, {
      hour: 'numeric',
      minute: 'numeric',
    });
    return { formattedDate, formattedTime };
  } catch (err) {
    console.error(
      'There was an error retrieving location date and time: ',
      err
    );
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDBCQUEwQiwrREFBVTtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2ludGxGb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NyYy8uL3NyYy93ZWF0aGVyLWRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpbnRsRm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5ICBGb3JtYXQgdGhlIGRhdGUgd2l0aCBJbnRsLkRhdGVUaW1lRm9ybWF0IChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsL0RhdGVUaW1lRm9ybWF0KS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuXG4gKiBUaGUgbWV0aG9kIHVzZXMgW2BJbnRsLkRhdGVUaW1lRm9ybWF0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9EYXRlVGltZUZvcm1hdCkgaW5zaWRlLlxuICogZm9ybWF0T3B0aW9ucyBhcmUgdGhlIHNhbWUgYXMgW2BJbnRsLkRhdGVUaW1lRm9ybWF0YCBvcHRpb25zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsL0RhdGVUaW1lRm9ybWF0I3VzaW5nX29wdGlvbnMpXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCBiZWZvcmUgTm9kZSB2ZXJzaW9uIDEzLjAuMCwgb25seSB0aGUgbG9jYWxlIGRhdGEgZm9yIGVuLVVTIGlzIGF2YWlsYWJsZSBieSBkZWZhdWx0LlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIG9yaWdpbmFsIGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gW2Zvcm1hdE9wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7J2xvb2t1cCd8J2Jlc3QgZml0J30gW2Zvcm1hdE9wdGlvbnMubG9jYWxlTWF0Y2hlcj0nYmVzdCBmaXQnXSAtIGxvY2FsZSBzZWxlY3Rpb24gYWxnb3JpdGhtLlxuICogQHBhcmFtIHsnbmFycm93J3wnc2hvcnQnfCdsb25nJ30gW2Zvcm1hdE9wdGlvbnMud2Vla2RheV0gLSByZXByZXNlbnRhdGlvbiB0aGUgZGF5cyBvZiB0aGUgd2Vlay5cbiAqIEBwYXJhbSB7J25hcnJvdyd8J3Nob3J0J3wnbG9uZyd9IFtmb3JtYXRPcHRpb25zLmVyYV0gLSByZXByZXNlbnRhdGlvbiBvZiBlcmFzLlxuICogQHBhcmFtIHsnbnVtZXJpYyd8JzItZGlnaXQnfSBbZm9ybWF0T3B0aW9ucy55ZWFyXSAtIHJlcHJlc2VudGF0aW9uIG9mIHllYXJzLlxuICogQHBhcmFtIHsnbnVtZXJpYyd8JzItZGlnaXQnfCduYXJyb3cnfCdzaG9ydCd8J2xvbmcnfSBbZm9ybWF0T3B0aW9ucy5tb250aD0nbnVtZXJpYyddIC0gcmVwcmVzZW50YXRpb24gb2YgbW9udGguXG4gKiBAcGFyYW0geydudW1lcmljJ3wnMi1kaWdpdCd9IFtmb3JtYXRPcHRpb25zLmRheT0nbnVtZXJpYyddIC0gcmVwcmVzZW50YXRpb24gb2YgZGF5LlxuICogQHBhcmFtIHsnbnVtZXJpYyd8JzItZGlnaXQnfSBbZm9ybWF0T3B0aW9ucy5ob3VyPSdudW1lcmljJ10gLSByZXByZXNlbnRhdGlvbiBvZiBob3Vycy5cbiAqIEBwYXJhbSB7J251bWVyaWMnfCcyLWRpZ2l0J30gW2Zvcm1hdE9wdGlvbnMubWludXRlXSAtIHJlcHJlc2VudGF0aW9uIG9mIG1pbnV0ZXMuXG4gKiBAcGFyYW0geydudW1lcmljJ3wnMi1kaWdpdCd9IFtmb3JtYXRPcHRpb25zLnNlY29uZF0gLSByZXByZXNlbnRhdGlvbiBvZiBzZWNvbmRzLlxuICogQHBhcmFtIHsnc2hvcnQnfCdsb25nJ30gW2Zvcm1hdE9wdGlvbnMudGltZVpvbmVOYW1lXSAtIHJlcHJlc2VudGF0aW9uIG9mIG5hbWVzIG9mIHRpbWUgem9uZXMuXG4gKiBAcGFyYW0geydiYXNpYyd8J2Jlc3QgZml0J30gW2Zvcm1hdE9wdGlvbnMuZm9ybWF0TWF0Y2hlcj0nYmVzdCBmaXQnXSAtIGZvcm1hdCBzZWxlY3Rpb24gYWxnb3JpdGhtLlxuICogQHBhcmFtIHtCb29sZWFufSBbZm9ybWF0T3B0aW9ucy5ob3VyMTJdIC0gZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHVzZSAxMi1ob3VyIHRpbWUgZm9ybWF0LlxuICogQHBhcmFtIHtTdHJpbmd9IFtmb3JtYXRPcHRpb25zLnRpbWVab25lXSAtIHRoZSB0aW1lIHpvbmUgdG8gdXNlLlxuICogQHBhcmFtIHtPYmplY3R9IFtsb2NhbGVPcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIGxvY2FsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBbbG9jYWxlT3B0aW9ucy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLlxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkLlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTAgT2N0b2JlciAyMDE5IGluIEdlcm1hbi5cbiAqIC8vIENvbnZlcnQgdGhlIGRhdGUgd2l0aCBmb3JtYXQncyBvcHRpb25zIGFuZCBsb2NhbGUncyBvcHRpb25zLlxuICogY29uc3QgcmVzdWx0ID0gaW50bEZvcm1hdChuZXcgRGF0ZSgyMDE5LCA5LCA0LCAxMiwgMzAsIDEzLCA0NTYpLCB7XG4gKiAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAqICAgICAgeWVhcjogJ251bWVyaWMnLFxuICogICAgICBtb250aDogJ2xvbmcnLFxuICogICAgICBkYXk6ICdudW1lcmljJyxcbiAqICAgIH0sIHtcbiAqICAgICAgbG9jYWxlOiAnZGUtREUnLFxuICogIH0pXG4gKiAvLz0+IEZyZWl0YWcsIDQuIE9rdG9iZXIgMjAxOVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTAgT2N0b2JlciAyMDE5LlxuICogLy8gQ29udmVydCB0aGUgZGF0ZSB3aXRoIGZvcm1hdCdzIG9wdGlvbnMuXG4gKiBjb25zdCByZXN1bHQgPSBpbnRsRm9ybWF0LmRlZmF1bHQobmV3IERhdGUoMjAxOSwgOSwgNCwgMTIsIDMwLCAxMywgNDU2KSwge1xuICogICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gKiAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gKiAgICAgIGRheTogJ251bWVyaWMnLFxuICogICAgICBob3VyOiAnbnVtZXJpYycsXG4gKiAgfSlcbiAqIC8vPT4gMTAvNC8yMDE5LCAxMiBQTVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTAgT2N0b2JlciAyMDE5IGluIEtvcmVhbi5cbiAqIC8vIENvbnZlcnQgdGhlIGRhdGUgd2l0aCBsb2NhbGUncyBvcHRpb25zLlxuICogY29uc3QgcmVzdWx0ID0gaW50bEZvcm1hdChuZXcgRGF0ZSgyMDE5LCA5LCA0LCAxMiwgMzAsIDEzLCA0NTYpLCB7XG4gKiAgICAgIGxvY2FsZTogJ2tvLUtSJyxcbiAqICB9KVxuICogLy89PiAyMDE5LiAxMC4gNC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDEwIE9jdG9iZXIgMjAxOSBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGludGxGb3JtYXQobmV3IERhdGUoMjAxOSwgOSwgNCwgMTIsIDMwLCAxMywgNDU2KSlcbiAqIC8vPT4gMTAvNC8yMDE5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGxGb3JtYXQoZGF0ZSwgZm9ybWF0T3JMb2NhbGUsIGxvY2FsZU9wdGlvbnMpIHtcbiAgdmFyIF9sb2NhbGVPcHRpb25zO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0T3B0aW9ucztcblxuICBpZiAoaXNGb3JtYXRPcHRpb25zKGZvcm1hdE9yTG9jYWxlKSkge1xuICAgIGZvcm1hdE9wdGlvbnMgPSBmb3JtYXRPckxvY2FsZTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbGVPcHRpb25zID0gZm9ybWF0T3JMb2NhbGU7XG4gIH1cblxuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKF9sb2NhbGVPcHRpb25zID0gbG9jYWxlT3B0aW9ucykgPT09IG51bGwgfHwgX2xvY2FsZU9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9sb2NhbGVPcHRpb25zLmxvY2FsZSwgZm9ybWF0T3B0aW9ucykuZm9ybWF0KGRhdGUpO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1hdE9wdGlvbnMob3B0cykge1xuICByZXR1cm4gb3B0cyAhPT0gdW5kZWZpbmVkICYmICEoJ2xvY2FsZScgaW4gb3B0cyk7XG59IiwiaW1wb3J0IHtcbiAgZXh0cmFjdExvY2F0aW9uRGF0ZUFuZFRpbWUsXG4gIGV4dHJhY3RDdXJyZW50VGVtcHMsXG4gIGV4dHJhY3RIdW1pZGl0eSxcbiAgZXh0cmFjdFByZWNpcGl0YXRpb24sXG4gIGV4dHJhY3RXaW5kU3BlZWQsXG59IGZyb20gJy4vd2VhdGhlci1kYXRhJztcblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVMb2NhbERhdGVUaW1lKGxvY2F0aW9uLCB1bml0KSB7XG4gIGNvbnN0IGRhdGVTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgY29uc3QgdGltZVNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpO1xuXG4gIGNvbnN0IGRhdGVUaW1lRGF0YSA9IGF3YWl0IGV4dHJhY3RMb2NhdGlvbkRhdGVBbmRUaW1lKGxvY2F0aW9uLCB1bml0KTtcbiAgY29uc3QgZGF0ZSA9IGRhdGVUaW1lRGF0YS5mb3JtYXR0ZWREYXRlO1xuICBjb25zdCB0aW1lID0gZGF0ZVRpbWVEYXRhLmZvcm1hdHRlZFRpbWU7XG5cbiAgZGF0ZVNwYW4udGV4dENvbnRlbnQgPSBkYXRlO1xuICB0aW1lU3Bhbi50ZXh0Q29udGVudCA9IHRpbWU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlQ3VycmVudFRlbXBzKGxvY2F0aW9uLCB1bml0KSB7XG4gIGNvbnN0IGN1cnJlbnRUZW1wcyA9IGF3YWl0IGV4dHJhY3RDdXJyZW50VGVtcHMobG9jYXRpb24sIHVuaXQpO1xuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXRlbXAnKTtcbiAgY29uc3QgaGlnaFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlnaC10ZW1wJyk7XG4gIGNvbnN0IGxvd1RlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG93LXRlbXAnKTtcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzLWxpa2UnKTtcblxuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGBDdXJyZW50bHk6ICR7Y3VycmVudFRlbXBzLnRlbXB9wrBgO1xuICBoaWdoVGVtcC50ZXh0Q29udGVudCA9IGBIOiAke2N1cnJlbnRUZW1wcy50ZW1wX21heH3CsGA7XG4gIGxvd1RlbXAudGV4dENvbnRlbnQgPSBgTDogJHtjdXJyZW50VGVtcHMudGVtcF9taW59wrBgO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtjdXJyZW50VGVtcHMuZmVlbHNfbGlrZX3CsGA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlSHVtaWRpdHkobG9jYXRpb24sIHVuaXQpIHtcbiAgY29uc3QgY3VycmVudEh1bWlkaXR5ID0gYXdhaXQgZXh0cmFjdEh1bWlkaXR5KGxvY2F0aW9uLCB1bml0KTtcbiAgY29uc3QgaHVtaWRpdHlTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XG5cbiAgaHVtaWRpdHlTcGFuLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2N1cnJlbnRIdW1pZGl0eX0lYDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVQcmVjaXBpdGF0aW9uKGxvY2F0aW9uLCB1bml0KSB7XG4gIGNvbnN0IGN1cnJlbnRQcmVjaXBpdGF0aW9uID0gYXdhaXQgZXh0cmFjdFByZWNpcGl0YXRpb24obG9jYXRpb24sIHVuaXQpO1xuICBjb25zdCBwcmVjaXBpdGF0aW9uU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVjaXBpdGF0aW9uJyk7XG5cbiAgcHJlY2lwaXRhdGlvblNwYW4udGV4dENvbnRlbnQgPSBgUHJlY2lwaXRhdGlvbjogJHtjdXJyZW50UHJlY2lwaXRhdGlvbn0lYDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gd3JpdGVXaW5kU3BlZWQobG9jYXRpb24sIHVuaXQpIHtcbiAgY29uc3QgY3VycmVudFdpbmRTcGVlZCA9IGF3YWl0IGV4dHJhY3RXaW5kU3BlZWQobG9jYXRpb24sIHVuaXQpO1xuICBjb25zdCB3aW5kU3BlZWRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQtc3BlZWQnKTtcblxuICB3aW5kU3BlZWRTcGFuLnRleHRDb250ZW50ID1cbiAgICB1bml0ID09PSAnaW1wZXJpYWwnXG4gICAgICA/IGBXaW5kIFNwZWVkOiAke2N1cnJlbnRXaW5kU3BlZWR9IE1QSGBcbiAgICAgIDogYFdpbmQgU3BlZWQ6ICR7Y3VycmVudFdpbmRTcGVlZH0gS00vSGA7XG59XG5cbndyaXRlQ3VycmVudFRlbXBzKCdEZXRyb2l0IExha2VzJywgJ2ltcGVyaWFsJyk7XG53cml0ZUh1bWlkaXR5KCdEZXRyb2l0IExha2VzJywgJ2ltcGVyaWFsJyk7XG53cml0ZVByZWNpcGl0YXRpb24oJ0RldHJvaXQgTGFrZXMnLCAnaW1wZXJpYWwnKTtcbndyaXRlV2luZFNwZWVkKCdEZXRyb2l0IExha2VzJywgJ2ltcGVyaWFsJyk7XG53cml0ZUxvY2FsRGF0ZVRpbWUoJ0RldHJvaXQgTGFrZXMnLCAnaW1wZXJpYWwnKTtcbiIsImltcG9ydCBpbnRsRm9ybWF0IGZyb20gJ2RhdGUtZm5zL2ludGxGb3JtYXQnO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uLCB1bml0KSB7XG4gIGNvbnN0IHdlYXRoZXJBUEl1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSYmdW5pdHM9JHt1bml0fSZBUFBJRD0zNTM1YzhkMzEyMzNkOThiN2Y4MGMyNmI1Yjc2ZTNhNmA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQVBJdXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgY3VycmVudCB3ZWF0aGVyIEFQSTogJywgZXJyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEZvcmVjYXN0V2VhdGhlcihsb2NhdGlvbiwgdW5pdCkge1xuICBjb25zdCB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bG9jYXRpb259JiZ1bml0cz0ke3VuaXR9JkFQUElEPTM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJBUEl1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIGZvcmVjYXN0IHdlYXRoZXIgQVBJOiAnLFxuICAgICAgZXJyXG4gICAgKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgdGhlIGZldGNoZWQgY3VycmVudCB3ZWF0aGVyIEFQSSBpbnRvIEpTT046ICcsXG4gICAgICBlcnJcbiAgICApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NGb3JlY2FzdFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEZvcmVjYXN0V2VhdGhlcihsb2NhdGlvbiwgdW5pdCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciBwcm9jZXNzaW5nIHRoZSBmZXRjaGVkIGN1cnJlbnQgd2VhdGhlciBBUEkgaW50byBKU09OOiAnLFxuICAgICAgZXJyXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdEN1cnJlbnRUZW1wcyhsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTihsb2NhdGlvbiwgdW5pdCk7XG4gICAgY29uc3QgeyB0ZW1wLCB0ZW1wX21pbiwgdGVtcF9tYXgsIGZlZWxzX2xpa2UgfSA9IHdlYXRoZXJEYXRhLm1haW47XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbXAsXG4gICAgICB0ZW1wX21pbixcbiAgICAgIHRlbXBfbWF4LFxuICAgICAgZmVlbHNfbGlrZSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBjdXJyZW50IHRlbXA6ICcsIGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RIdW1pZGl0eShsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTihsb2NhdGlvbiwgdW5pdCk7XG4gICAgY29uc3QgeyBodW1pZGl0eSB9ID0gd2VhdGhlckRhdGEubWFpbjtcbiAgICByZXR1cm4gaHVtaWRpdHk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGN1cnJlbnQgaHVtaWRpdHk6ICcsIGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RXaW5kU3BlZWQobG9jYXRpb24sIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04obG9jYXRpb24sIHVuaXQpO1xuICAgIGNvbnN0IHsgc3BlZWQgfSA9IHdlYXRoZXJEYXRhLndpbmQ7XG4gICAgcmV0dXJuIHNwZWVkO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBjdXJyZW50IHdpbmQgc3BlZWQnLCBlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRyYWN0UHJlY2lwaXRhdGlvbihsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHByb2Nlc3NGb3JlY2FzdFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCBwcmVjaXBpdGF0aW9uID0gZm9yZWNhc3REYXRhLmxpc3RbMF0ucG9wO1xuICAgIGNvbnN0IHBhcnNlZFByZWNpcGl0YXRpb24gPSBwYXJzZUZsb2F0KHByZWNpcGl0YXRpb24pLnRvRml4ZWQoMSk7XG4gICAgY29uc3QgZm9ybWF0dGVkUHJlY2lwaXRhdGlvbiA9IHBhcnNlZFByZWNpcGl0YXRpb24gKiAxMDA7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFByZWNpcGl0YXRpb247XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgZm9yZWNhc3RlZCBwcmVjaXBpdGF0aW9uOiAnLFxuICAgICAgZXJyXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdExvY2F0aW9uRGF0ZUFuZFRpbWUobG9jYXRpb24sIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobG9jYXRpb25EYXRhLmR0ICogMTAwMCk7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGludGxGb3JtYXQoZGF0ZSwge1xuICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgeWVhcjogJzItZGlnaXQnLFxuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICB9KTtcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gaW50bEZvcm1hdChkYXRlLCB7XG4gICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICB9KTtcbiAgICByZXR1cm4geyBmb3JtYXR0ZWREYXRlLCBmb3JtYXR0ZWRUaW1lIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgbG9jYXRpb24gZGF0ZSBhbmQgdGltZTogJyxcbiAgICAgIGVyclxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==