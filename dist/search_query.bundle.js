"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["search_query"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/app/search-query.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoX3F1ZXJ5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTzs7QUFFQTtBQUNQO0FBQ0EscUNBQXFDLEVBQUUsbUJBQW1CLEVBQUU7QUFDNUQ7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL2FwcC9zZWFyY2gtcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQgPSAoKSA9PiBzZWFyY2hCYXIudmFsdWUgfHwgJ01pbm5lYXBvbGlzJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2VhcmNoUXVlcnkgPSAoc2VhcmNoUXVlcnkpID0+IHtcbiAgY29uc3Qgc2VhcmNoUmVnZXggPVxuICAgIC9eKFthLXpBLVpcXGRcXHMrXSopKCxcXHMqKFthLXpBLVpdezJ9KT8pPygsXFxzKyhbYS16QS1aXXsyfSk/KT8kLztcbiAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCB8fCBzZWFyY2hSZWdleC50ZXN0KHNlYXJjaFF1ZXJ5KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvblN0YXRlKCkge1xuICBsZXQgbG9jYXRpb24gPSAnTWlubmVhcG9saXMnO1xuXG4gIGZ1bmN0aW9uIHNldExvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0TG9jYXRpb24sXG4gICAgZ2V0TG9jYXRpb24sXG4gIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9