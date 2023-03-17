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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/weather-data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0p5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHlCQUF5QjtBQUNwQyxXQUFXLHlCQUF5QjtBQUNwQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLDZDQUE2QztBQUN4RCxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLHFCQUFxQjtBQUNoQyxXQUFXLGdCQUFnQjtBQUMzQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLGlCQUFpQjtBQUM1QixhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmOztBQUVBLEVBQUUsc0VBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RjZDOztBQUU3QztBQUNBLDZFQUE2RSxTQUFTLFVBQVUsS0FBSztBQUNyRztBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RSxTQUFTLFVBQVUsS0FBSztBQUN0RztBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxZQUFZLHVDQUF1QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0RBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMEJBQTBCLCtEQUFVO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaW50bEZvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvd2VhdGhlci1kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaW50bEZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSAgRm9ybWF0IHRoZSBkYXRlIHdpdGggSW50bC5EYXRlVGltZUZvcm1hdCAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9EYXRlVGltZUZvcm1hdCkuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LlxuICogVGhlIG1ldGhvZCB1c2VzIFtgSW50bC5EYXRlVGltZUZvcm1hdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvRGF0ZVRpbWVGb3JtYXQpIGluc2lkZS5cbiAqIGZvcm1hdE9wdGlvbnMgYXJlIHRoZSBzYW1lIGFzIFtgSW50bC5EYXRlVGltZUZvcm1hdGAgb3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9EYXRlVGltZUZvcm1hdCN1c2luZ19vcHRpb25zKVxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgYmVmb3JlIE5vZGUgdmVyc2lvbiAxMy4wLjAsIG9ubHkgdGhlIGxvY2FsZSBkYXRhIGZvciBlbi1VUyBpcyBhdmFpbGFibGUgYnkgZGVmYXVsdC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSBvcmlnaW5hbCBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IFtmb3JtYXRPcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0geydsb29rdXAnfCdiZXN0IGZpdCd9IFtmb3JtYXRPcHRpb25zLmxvY2FsZU1hdGNoZXI9J2Jlc3QgZml0J10gLSBsb2NhbGUgc2VsZWN0aW9uIGFsZ29yaXRobS5cbiAqIEBwYXJhbSB7J25hcnJvdyd8J3Nob3J0J3wnbG9uZyd9IFtmb3JtYXRPcHRpb25zLndlZWtkYXldIC0gcmVwcmVzZW50YXRpb24gdGhlIGRheXMgb2YgdGhlIHdlZWsuXG4gKiBAcGFyYW0geyduYXJyb3cnfCdzaG9ydCd8J2xvbmcnfSBbZm9ybWF0T3B0aW9ucy5lcmFdIC0gcmVwcmVzZW50YXRpb24gb2YgZXJhcy5cbiAqIEBwYXJhbSB7J251bWVyaWMnfCcyLWRpZ2l0J30gW2Zvcm1hdE9wdGlvbnMueWVhcl0gLSByZXByZXNlbnRhdGlvbiBvZiB5ZWFycy5cbiAqIEBwYXJhbSB7J251bWVyaWMnfCcyLWRpZ2l0J3wnbmFycm93J3wnc2hvcnQnfCdsb25nJ30gW2Zvcm1hdE9wdGlvbnMubW9udGg9J251bWVyaWMnXSAtIHJlcHJlc2VudGF0aW9uIG9mIG1vbnRoLlxuICogQHBhcmFtIHsnbnVtZXJpYyd8JzItZGlnaXQnfSBbZm9ybWF0T3B0aW9ucy5kYXk9J251bWVyaWMnXSAtIHJlcHJlc2VudGF0aW9uIG9mIGRheS5cbiAqIEBwYXJhbSB7J251bWVyaWMnfCcyLWRpZ2l0J30gW2Zvcm1hdE9wdGlvbnMuaG91cj0nbnVtZXJpYyddIC0gcmVwcmVzZW50YXRpb24gb2YgaG91cnMuXG4gKiBAcGFyYW0geydudW1lcmljJ3wnMi1kaWdpdCd9IFtmb3JtYXRPcHRpb25zLm1pbnV0ZV0gLSByZXByZXNlbnRhdGlvbiBvZiBtaW51dGVzLlxuICogQHBhcmFtIHsnbnVtZXJpYyd8JzItZGlnaXQnfSBbZm9ybWF0T3B0aW9ucy5zZWNvbmRdIC0gcmVwcmVzZW50YXRpb24gb2Ygc2Vjb25kcy5cbiAqIEBwYXJhbSB7J3Nob3J0J3wnbG9uZyd9IFtmb3JtYXRPcHRpb25zLnRpbWVab25lTmFtZV0gLSByZXByZXNlbnRhdGlvbiBvZiBuYW1lcyBvZiB0aW1lIHpvbmVzLlxuICogQHBhcmFtIHsnYmFzaWMnfCdiZXN0IGZpdCd9IFtmb3JtYXRPcHRpb25zLmZvcm1hdE1hdGNoZXI9J2Jlc3QgZml0J10gLSBmb3JtYXQgc2VsZWN0aW9uIGFsZ29yaXRobS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Zvcm1hdE9wdGlvbnMuaG91cjEyXSAtIGRldGVybWluZXMgd2hldGhlciB0byB1c2UgMTItaG91ciB0aW1lIGZvcm1hdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbZm9ybWF0T3B0aW9ucy50aW1lWm9uZV0gLSB0aGUgdGltZSB6b25lIHRvIHVzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbbG9jYWxlT3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBsb2NhbGUuXG4gKiBAcGFyYW0ge1N0cmluZ3xTdHJpbmdbXX0gW2xvY2FsZU9wdGlvbnMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZy5cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZC5cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDEwIE9jdG9iZXIgMjAxOSBpbiBHZXJtYW4uXG4gKiAvLyBDb252ZXJ0IHRoZSBkYXRlIHdpdGggZm9ybWF0J3Mgb3B0aW9ucyBhbmQgbG9jYWxlJ3Mgb3B0aW9ucy5cbiAqIGNvbnN0IHJlc3VsdCA9IGludGxGb3JtYXQobmV3IERhdGUoMjAxOSwgOSwgNCwgMTIsIDMwLCAxMywgNDU2KSwge1xuICogICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gKiAgICAgIHllYXI6ICdudW1lcmljJyxcbiAqICAgICAgbW9udGg6ICdsb25nJyxcbiAqICAgICAgZGF5OiAnbnVtZXJpYycsXG4gKiAgICB9LCB7XG4gKiAgICAgIGxvY2FsZTogJ2RlLURFJyxcbiAqICB9KVxuICogLy89PiBGcmVpdGFnLCA0LiBPa3RvYmVyIDIwMTlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDEwIE9jdG9iZXIgMjAxOS5cbiAqIC8vIENvbnZlcnQgdGhlIGRhdGUgd2l0aCBmb3JtYXQncyBvcHRpb25zLlxuICogY29uc3QgcmVzdWx0ID0gaW50bEZvcm1hdC5kZWZhdWx0KG5ldyBEYXRlKDIwMTksIDksIDQsIDEyLCAzMCwgMTMsIDQ1NiksIHtcbiAqICAgICAgeWVhcjogJ251bWVyaWMnLFxuICogICAgICBtb250aDogJ251bWVyaWMnLFxuICogICAgICBkYXk6ICdudW1lcmljJyxcbiAqICAgICAgaG91cjogJ251bWVyaWMnLFxuICogIH0pXG4gKiAvLz0+IDEwLzQvMjAxOSwgMTIgUE1cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDEwIE9jdG9iZXIgMjAxOSBpbiBLb3JlYW4uXG4gKiAvLyBDb252ZXJ0IHRoZSBkYXRlIHdpdGggbG9jYWxlJ3Mgb3B0aW9ucy5cbiAqIGNvbnN0IHJlc3VsdCA9IGludGxGb3JtYXQobmV3IERhdGUoMjAxOSwgOSwgNCwgMTIsIDMwLCAxMywgNDU2KSwge1xuICogICAgICBsb2NhbGU6ICdrby1LUicsXG4gKiAgfSlcbiAqIC8vPT4gMjAxOS4gMTAuIDQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMCBPY3RvYmVyIDIwMTkgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBpbnRsRm9ybWF0KG5ldyBEYXRlKDIwMTksIDksIDQsIDEyLCAzMCwgMTMsIDQ1NikpXG4gKiAvLz0+IDEwLzQvMjAxOVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRsRm9ybWF0KGRhdGUsIGZvcm1hdE9yTG9jYWxlLCBsb2NhbGVPcHRpb25zKSB7XG4gIHZhciBfbG9jYWxlT3B0aW9ucztcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdE9wdGlvbnM7XG5cbiAgaWYgKGlzRm9ybWF0T3B0aW9ucyhmb3JtYXRPckxvY2FsZSkpIHtcbiAgICBmb3JtYXRPcHRpb25zID0gZm9ybWF0T3JMb2NhbGU7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxlT3B0aW9ucyA9IGZvcm1hdE9yTG9jYWxlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KChfbG9jYWxlT3B0aW9ucyA9IGxvY2FsZU9wdGlvbnMpID09PSBudWxsIHx8IF9sb2NhbGVPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbG9jYWxlT3B0aW9ucy5sb2NhbGUsIGZvcm1hdE9wdGlvbnMpLmZvcm1hdChkYXRlKTtcbn1cblxuZnVuY3Rpb24gaXNGb3JtYXRPcHRpb25zKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgIT09IHVuZGVmaW5lZCAmJiAhKCdsb2NhbGUnIGluIG9wdHMpO1xufSIsImltcG9ydCBpbnRsRm9ybWF0IGZyb20gJ2RhdGUtZm5zL2ludGxGb3JtYXQnO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uLCB1bml0KSB7XG4gIGNvbnN0IHdlYXRoZXJBUEl1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSYmdW5pdHM9JHt1bml0fSZBUFBJRD0zNTM1YzhkMzEyMzNkOThiN2Y4MGMyNmI1Yjc2ZTNhNmA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQVBJdXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgY3VycmVudCB3ZWF0aGVyIEFQSTogJywgZXJyKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEZvcmVjYXN0V2VhdGhlcihsb2NhdGlvbiwgdW5pdCkge1xuICBjb25zdCB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bG9jYXRpb259JiZ1bml0cz0ke3VuaXR9JkFQUElEPTM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdlYXRoZXJBUEl1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIGZvcmVjYXN0IHdlYXRoZXIgQVBJOiAnLFxuICAgICAgZXJyXG4gICAgKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHByb2Nlc3NpbmcgdGhlIGZldGNoZWQgY3VycmVudCB3ZWF0aGVyIEFQSSBpbnRvIEpTT046ICcsXG4gICAgICBlcnJcbiAgICApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NGb3JlY2FzdFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEZvcmVjYXN0V2VhdGhlcihsb2NhdGlvbiwgdW5pdCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciBwcm9jZXNzaW5nIHRoZSBmZXRjaGVkIGN1cnJlbnQgd2VhdGhlciBBUEkgaW50byBKU09OOiAnLFxuICAgICAgZXJyXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdEN1cnJlbnRUZW1wcyhsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTihsb2NhdGlvbiwgdW5pdCk7XG4gICAgY29uc3QgeyB0ZW1wLCB0ZW1wX21pbiwgdGVtcF9tYXgsIGZlZWxzX2xpa2UgfSA9IHdlYXRoZXJEYXRhLm1haW47XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbXAsXG4gICAgICB0ZW1wX21pbixcbiAgICAgIHRlbXBfbWF4LFxuICAgICAgZmVlbHNfbGlrZSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBjdXJyZW50IHRlbXA6ICcsIGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RIdW1pZGl0eShsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTihsb2NhdGlvbiwgdW5pdCk7XG4gICAgY29uc3QgeyBodW1pZGl0eSB9ID0gd2VhdGhlckRhdGEubWFpbjtcbiAgICByZXR1cm4gaHVtaWRpdHk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGN1cnJlbnQgaHVtaWRpdHk6ICcsIGVycik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RXaW5kU3BlZWQobG9jYXRpb24sIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04obG9jYXRpb24sIHVuaXQpO1xuICAgIGNvbnN0IHsgc3BlZWQgfSA9IHdlYXRoZXJEYXRhLndpbmQ7XG4gICAgcmV0dXJuIHNwZWVkO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBjdXJyZW50IHdpbmQgc3BlZWQnLCBlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRyYWN0UHJlY2lwaXRhdGlvbihsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHByb2Nlc3NGb3JlY2FzdFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCBwcmVjaXBpdGF0aW9uID0gZm9yZWNhc3REYXRhLmxpc3RbMF0ucG9wO1xuICAgIGNvbnN0IHBhcnNlZFByZWNpcGl0YXRpb24gPSBwYXJzZUZsb2F0KHByZWNpcGl0YXRpb24pLnRvRml4ZWQoMSk7XG4gICAgY29uc3QgZm9ybWF0dGVkUHJlY2lwaXRhdGlvbiA9IHBhcnNlZFByZWNpcGl0YXRpb24gKiAxMDA7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFByZWNpcGl0YXRpb247XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgZm9yZWNhc3RlZCBwcmVjaXBpdGF0aW9uOiAnLFxuICAgICAgZXJyXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdExvY2F0aW9uRGF0ZUFuZFRpbWUobG9jYXRpb24sIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKGxvY2F0aW9uLCB1bml0KTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobG9jYXRpb25EYXRhLmR0ICogMTAwMCk7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGludGxGb3JtYXQoZGF0ZSwge1xuICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgeWVhcjogJzItZGlnaXQnLFxuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICB9KTtcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gaW50bEZvcm1hdChkYXRlLCB7XG4gICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICB9KTtcbiAgICByZXR1cm4geyBmb3JtYXR0ZWREYXRlLCBmb3JtYXR0ZWRUaW1lIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgbG9jYXRpb24gZGF0ZSBhbmQgdGltZTogJyxcbiAgICAgIGVyclxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==