"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["search_query"],{

/***/ "./src/components/app/search-query.js":
/*!********************************************!*\
  !*** ./src/components/app/search-query.js ***!
  \********************************************/
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/app/search-query.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoX3F1ZXJ5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPOztBQUVBO0FBQ1A7QUFDQSxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRTtBQUM1RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvYXBwL3NlYXJjaC1xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcblxuZXhwb3J0IGNvbnN0IGdldExvY2F0aW9uRnJvbVVzZXJJbnB1dCA9ICgpID0+IHNlYXJjaEJhci52YWx1ZSB8fCAnTWlubmVhcG9saXMnO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVTZWFyY2hRdWVyeSA9IChzZWFyY2hRdWVyeSkgPT4ge1xuICBjb25zdCBzZWFyY2hSZWdleCA9XG4gICAgL14oW2EtekEtWlxcZFxccytdKikoLFxccyooW2EtekEtWl17Mn0pPyk/KCxcXHMrKFthLXpBLVpdezJ9KT8pPyQvO1xuICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwIHx8IHNlYXJjaFJlZ2V4LnRlc3Qoc2VhcmNoUXVlcnkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==