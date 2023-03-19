"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["weather"],{

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

async function extractLocationDateAndTime(location, unit) {
  try {
    const locationData = await processCurrentWeatherJSON(location, unit);
    const date = new Date(locationData.dt * 1000);
    const formattedDate = (0,date_fns_intlFormat__WEBPACK_IMPORTED_MODULE_0__["default"])(date, {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/weather-data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0p5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHlCQUF5QjtBQUNwQyxXQUFXLHlCQUF5QjtBQUNwQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLDZDQUE2QztBQUN4RCxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLGdCQUFnQjtBQUMzQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLGlCQUFpQjtBQUM1QixhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmOztBQUVBLEVBQUUsc0VBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RjZDOztBQUU3QztBQUNBLDZFQUE2RSxTQUFTLFVBQVUsS0FBSztBQUNyRztBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RSxTQUFTLFVBQVUsS0FBSztBQUN0RztBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrREFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwwQkFBMEIsK0RBQVU7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pbnRsRm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3NyYy8uL3NyYy93ZWF0aGVyLWRhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpbnRsRm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5ICBGb3JtYXQgdGhlIGRhdGUgd2l0aCBJbnRsLkRhdGVUaW1lRm9ybWF0IChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsL0RhdGVUaW1lRm9ybWF0KS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuXG4gKiBUaGUgbWV0aG9kIHVzZXMgW2BJbnRsLkRhdGVUaW1lRm9ybWF0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9EYXRlVGltZUZvcm1hdCkgaW5zaWRlLlxuICogZm9ybWF0T3B0aW9ucyBhcmUgdGhlIHNhbWUgYXMgW2BJbnRsLkRhdGVUaW1lRm9ybWF0YCBvcHRpb25zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsL0RhdGVUaW1lRm9ybWF0I3VzaW5nX29wdGlvbnMpXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCBiZWZvcmUgTm9kZSB2ZXJzaW9uIDEzLjAuMCwgb25seSB0aGUgbG9jYWxlIGRhdGEgZm9yIGVuLVVTIGlzIGF2YWlsYWJsZSBieSBkZWZhdWx0LlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIG9yaWdpbmFsIGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gW2Zvcm1hdE9wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7J2xvb2t1cCd8J2Jlc3QgZml0J30gW2Zvcm1hdE9wdGlvbnMubG9jYWxlTWF0Y2hlcj0nYmVzdCBmaXQnXSAtIGxvY2FsZSBzZWxlY3Rpb24gYWxnb3JpdGhtLlxuICogQHBhcmFtIHsnbmFycm93J3wnc2hvcnQnfCdsb25nJ30gW2Zvcm1hdE9wdGlvbnMud2Vla2RheV0gLSByZXByZXNlbnRhdGlvbiB0aGUgZGF5cyBvZiB0aGUgd2Vlay5cbiAqIEBwYXJhbSB7J25hcnJvdyd8J3Nob3J0J3wnbG9uZyd9IFtmb3JtYXRPcHRpb25zLmVyYV0gLSByZXByZXNlbnRhdGlvbiBvZiBlcmFzLlxuICogQHBhcmFtIHsnbnVtZXJpYyd8JzItZGlnaXQnfSBbZm9ybWF0T3B0aW9ucy55ZWFyXSAtIHJlcHJlc2VudGF0aW9uIG9mIHllYXJzLlxuICogQHBhcmFtIHsnbnVtZXJpYyd8JzItZGlnaXQnfCduYXJyb3cnfCdzaG9ydCd8J2xvbmcnfSBbZm9ybWF0T3B0aW9ucy5tb250aD0nbnVtZXJpYyddIC0gcmVwcmVzZW50YXRpb24gb2YgbW9udGguXG4gKiBAcGFyYW0geydudW1lcmljJ3wnMi1kaWdpdCd9IFtmb3JtYXRPcHRpb25zLmRheT0nbnVtZXJpYyddIC0gcmVwcmVzZW50YXRpb24gb2YgZGF5LlxuICogQHBhcmFtIHsnbnVtZXJpYyd8JzItZGlnaXQnfSBbZm9ybWF0T3B0aW9ucy5ob3VyPSdudW1lcmljJ10gLSByZXByZXNlbnRhdGlvbiBvZiBob3Vycy5cbiAqIEBwYXJhbSB7J251bWVyaWMnfCcyLWRpZ2l0J30gW2Zvcm1hdE9wdGlvbnMubWludXRlXSAtIHJlcHJlc2VudGF0aW9uIG9mIG1pbnV0ZXMuXG4gKiBAcGFyYW0geydudW1lcmljJ3wnMi1kaWdpdCd9IFtmb3JtYXRPcHRpb25zLnNlY29uZF0gLSByZXByZXNlbnRhdGlvbiBvZiBzZWNvbmRzLlxuICogQHBhcmFtIHsnc2hvcnQnfCdsb25nJ30gW2Zvcm1hdE9wdGlvbnMudGltZVpvbmVOYW1lXSAtIHJlcHJlc2VudGF0aW9uIG9mIG5hbWVzIG9mIHRpbWUgem9uZXMuXG4gKiBAcGFyYW0geydiYXNpYyd8J2Jlc3QgZml0J30gW2Zvcm1hdE9wdGlvbnMuZm9ybWF0TWF0Y2hlcj0nYmVzdCBmaXQnXSAtIGZvcm1hdCBzZWxlY3Rpb24gYWxnb3JpdGhtLlxuICogQHBhcmFtIHtCb29sZWFufSBbZm9ybWF0T3B0aW9ucy5ob3VyMTJdIC0gZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHVzZSAxMi1ob3VyIHRpbWUgZm9ybWF0LlxuICogQHBhcmFtIHtTdHJpbmd9IFtmb3JtYXRPcHRpb25zLnRpbWVab25lXSAtIHRoZSB0aW1lIHpvbmUgdG8gdXNlLlxuICogQHBhcmFtIHtPYmplY3R9IFtsb2NhbGVPcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIGxvY2FsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBbbG9jYWxlT3B0aW9ucy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLlxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkLlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTAgT2N0b2JlciAyMDE5IGluIEdlcm1hbi5cbiAqIC8vIENvbnZlcnQgdGhlIGRhdGUgd2l0aCBmb3JtYXQncyBvcHRpb25zIGFuZCBsb2NhbGUncyBvcHRpb25zLlxuICogY29uc3QgcmVzdWx0ID0gaW50bEZvcm1hdChuZXcgRGF0ZSgyMDE5LCA5LCA0LCAxMiwgMzAsIDEzLCA0NTYpLCB7XG4gKiAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAqICAgICAgeWVhcjogJ251bWVyaWMnLFxuICogICAgICBtb250aDogJ2xvbmcnLFxuICogICAgICBkYXk6ICdudW1lcmljJyxcbiAqICAgIH0sIHtcbiAqICAgICAgbG9jYWxlOiAnZGUtREUnLFxuICogIH0pXG4gKiAvLz0+IEZyZWl0YWcsIDQuIE9rdG9iZXIgMjAxOVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTAgT2N0b2JlciAyMDE5LlxuICogLy8gQ29udmVydCB0aGUgZGF0ZSB3aXRoIGZvcm1hdCdzIG9wdGlvbnMuXG4gKiBjb25zdCByZXN1bHQgPSBpbnRsRm9ybWF0LmRlZmF1bHQobmV3IERhdGUoMjAxOSwgOSwgNCwgMTIsIDMwLCAxMywgNDU2KSwge1xuICogICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gKiAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gKiAgICAgIGRheTogJ251bWVyaWMnLFxuICogICAgICBob3VyOiAnbnVtZXJpYycsXG4gKiAgfSlcbiAqIC8vPT4gMTAvNC8yMDE5LCAxMiBQTVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTAgT2N0b2JlciAyMDE5IGluIEtvcmVhbi5cbiAqIC8vIENvbnZlcnQgdGhlIGRhdGUgd2l0aCBsb2NhbGUncyBvcHRpb25zLlxuICogY29uc3QgcmVzdWx0ID0gaW50bEZvcm1hdChuZXcgRGF0ZSgyMDE5LCA5LCA0LCAxMiwgMzAsIDEzLCA0NTYpLCB7XG4gKiAgICAgIGxvY2FsZTogJ2tvLUtSJyxcbiAqICB9KVxuICogLy89PiAyMDE5LiAxMC4gNC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDEwIE9jdG9iZXIgMjAxOSBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGludGxGb3JtYXQobmV3IERhdGUoMjAxOSwgOSwgNCwgMTIsIDMwLCAxMywgNDU2KSlcbiAqIC8vPT4gMTAvNC8yMDE5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGxGb3JtYXQoZGF0ZSwgZm9ybWF0T3JMb2NhbGUsIGxvY2FsZU9wdGlvbnMpIHtcbiAgdmFyIF9sb2NhbGVPcHRpb25zO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0T3B0aW9ucztcblxuICBpZiAoaXNGb3JtYXRPcHRpb25zKGZvcm1hdE9yTG9jYWxlKSkge1xuICAgIGZvcm1hdE9wdGlvbnMgPSBmb3JtYXRPckxvY2FsZTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbGVPcHRpb25zID0gZm9ybWF0T3JMb2NhbGU7XG4gIH1cblxuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKF9sb2NhbGVPcHRpb25zID0gbG9jYWxlT3B0aW9ucykgPT09IG51bGwgfHwgX2xvY2FsZU9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9sb2NhbGVPcHRpb25zLmxvY2FsZSwgZm9ybWF0T3B0aW9ucykuZm9ybWF0KGRhdGUpO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1hdE9wdGlvbnMob3B0cykge1xuICByZXR1cm4gb3B0cyAhPT0gdW5kZWZpbmVkICYmICEoJ2xvY2FsZScgaW4gb3B0cyk7XG59IiwiaW1wb3J0IGludGxGb3JtYXQgZnJvbSAnZGF0ZS1mbnMvaW50bEZvcm1hdCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ3VycmVudFdlYXRoZXIobG9jYXRpb24sIHVuaXQpIHtcbiAgY29uc3Qgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JiZ1bml0cz0ke3VuaXR9JkFQUElEPTM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJBUEl1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBjdXJyZW50IHdlYXRoZXIgQVBJOiAnLCBlcnIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRm9yZWNhc3RXZWF0aGVyKGxvY2F0aW9uLCB1bml0KSB7XG4gIGNvbnN0IHdlYXRoZXJBUEl1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtsb2NhdGlvbn0mJnVuaXRzPSR7dW5pdH0mQVBQSUQ9MzUzNWM4ZDMxMjMzZDk4YjdmODBjMjZiNWI3NmUzYTZgO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgZm9yZWNhc3Qgd2VhdGhlciBBUEk6ICcsXG4gICAgICBlcnJcbiAgICApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04obG9jYXRpb24sIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoQ3VycmVudFdlYXRoZXIobG9jYXRpb24sIHVuaXQpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgcHJvY2Vzc2luZyB0aGUgZmV0Y2hlZCBjdXJyZW50IHdlYXRoZXIgQVBJIGludG8gSlNPTjogJyxcbiAgICAgIGVyclxuICAgICk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0ZvcmVjYXN0V2VhdGhlckpTT04obG9jYXRpb24sIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoRm9yZWNhc3RXZWF0aGVyKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgdGhlIGZldGNoZWQgY3VycmVudCB3ZWF0aGVyIEFQSSBpbnRvIEpTT046ICcsXG4gICAgICBlcnJcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRyYWN0Q3VycmVudFRlbXBzKGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCB7IHRlbXAsIGZlZWxzX2xpa2UgfSA9IHdlYXRoZXJEYXRhLm1haW47XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbXAsXG4gICAgICBmZWVsc19saWtlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGN1cnJlbnQgdGVtcDogJywgZXJyKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdEh1bWlkaXR5KGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCB7IGh1bWlkaXR5IH0gPSB3ZWF0aGVyRGF0YS5tYWluO1xuICAgIHJldHVybiBodW1pZGl0eTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgY3VycmVudCBodW1pZGl0eTogJywgZXJyKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFdpbmRTcGVlZChsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTihsb2NhdGlvbiwgdW5pdCk7XG4gICAgY29uc3QgeyBzcGVlZCB9ID0gd2VhdGhlckRhdGEud2luZDtcbiAgICByZXR1cm4gc3BlZWQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGN1cnJlbnQgd2luZCBzcGVlZCcsIGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RQcmVjaXBpdGF0aW9uKGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgcHJvY2Vzc0ZvcmVjYXN0V2VhdGhlckpTT04obG9jYXRpb24sIHVuaXQpO1xuICAgIGNvbnN0IHByZWNpcGl0YXRpb24gPSBmb3JlY2FzdERhdGEubGlzdFswXS5wb3A7XG4gICAgY29uc3QgcGFyc2VkUHJlY2lwaXRhdGlvbiA9IHBhcnNlRmxvYXQocHJlY2lwaXRhdGlvbikudG9GaXhlZCgxKTtcbiAgICBjb25zdCBmb3JtYXR0ZWRQcmVjaXBpdGF0aW9uID0gcGFyc2VkUHJlY2lwaXRhdGlvbiAqIDEwMDtcbiAgICByZXR1cm4gZm9ybWF0dGVkUHJlY2lwaXRhdGlvbjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBmb3JlY2FzdGVkIHByZWNpcGl0YXRpb246ICcsXG4gICAgICBlcnJcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRyYWN0TG9jYXRpb25EYXRlQW5kVGltZShsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IHByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04obG9jYXRpb24sIHVuaXQpO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShsb2NhdGlvbkRhdGEuZHQgKiAxMDAwKTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gaW50bEZvcm1hdChkYXRlLCB7XG4gICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgIH0pO1xuICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBpbnRsRm9ybWF0KGRhdGUsIHtcbiAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgIG1pbnV0ZTogJ251bWVyaWMnLFxuICAgIH0pO1xuICAgIHJldHVybiB7IGZvcm1hdHRlZERhdGUsIGZvcm1hdHRlZFRpbWUgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBsb2NhdGlvbiBkYXRlIGFuZCB0aW1lOiAnLFxuICAgICAgZXJyXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9